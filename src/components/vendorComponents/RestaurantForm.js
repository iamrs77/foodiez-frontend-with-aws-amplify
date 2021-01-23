import React, { useState } from 'react';
import '../../styles/MenuForm.css';
import { withRouter } from 'react-router-dom';
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { createVendor } from '../../graphql/mutations';

function RestaurantForm(props) {

    let [name, setName] = useState(null);
    let [location, setLocation] = useState(null);
    let [foodType, setFoodType] = useState(null);
    let [minPrice, setMinPrice] = useState(null);
    let [deliveryTime, setDeliveryTime] = useState(null);

    let handleSubmit = (e) => {
        e.preventDefault();
        // mutation{
        //     createVendor(input: {
        //       name: "Chai Point"
        //       foodType: "Indian and Thai"
        //       minPrice: 200
        //       location: "HSR Layout, Bangalore"
        //       deliveryTime: "25"
        //       userId: "4108abc8-c42e-45b6-b7b8-0107855da8a4"
        //     }) {
        //       name
        //       id
        //       userId
        //     }
        //   }
        Auth.currentAuthenticatedUser().then(user => {
            let input = { name, foodType, minPrice, location, deliveryTime, userId: user.username };

            API.graphql(graphqlOperation(createVendor, {input})).then(res => {
                props.history.goBack();
            }).catch(err => {
                console.log(err);
            })
        })
    }

    return (
        <div className='form'>
            <h1> Add a Restaurant to your menu</h1>
            <div id="error" className="danger-text"></div>
            <form onSubmit={handleSubmit}>
                <div className="form-group col-12">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"  placeholder="Enter Name of Item" required onChange={(e) => {setName(e.target.value)}} />
                </div>

                <div className="form-group col-12">
                    <label htmlFor="location">Add Location</label>
                    <input type="text" className="form-control" id="location" placeholder="HSR Layout, Mumbai" required onChange={(e) => {setLocation(e.target.value)}}/>
                </div>

                <div className="form-group col-12">
                    <label htmlFor="food-type">Food Type</label>
                    <input type="text" className="form-control" id="food-type" placeholder="Indian, Thai, Chinese etc" required onChange={(e) => {setFoodType(e.target.value)}}/>
                </div>

                <div className="form-group col-3">
                    <label htmlFor="min-price">Minimum Price for Two</label>
                    <input type="number" className="form-control" id="min-price" placeholder="Enter Cost" required onChange={(e) => {setMinPrice(e.target.value)}}/>
                </div>

                <div className="form-group col-3">
                    <label htmlFor="delivery-time">Delivery Time in Minutes</label>
                    <input type="number" className="form-control" id="delivery-time" placeholder="Time" required onChange={(e) => {setDeliveryTime(e.target.value)}}/>
                </div>
                
                <button className="btn btn-primary col-3">Submit</button>
            </form>
        </div>
    )
}

export default withRouter(RestaurantForm)
