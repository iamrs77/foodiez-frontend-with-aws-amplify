import React, { useState } from 'react';
import '../../styles/MenuForm.css';
import { useParams, withRouter } from 'react-router-dom';
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify'
import { createFoodItem } from "../../graphql/mutations";
import awsExports from "../../aws-exports";

function MenuForm(props) {
    let {vendorId} = useParams();
    let [name, setName] = useState(null);
    let [description, setDescrition] = useState(null);
    let [foodType, setFoodType] = useState(null);
    let [cost, setCost] = useState(null);
    let [imageAdded, setImageAdded] = useState(false);
    let [isUploading, setIsUploading] = useState(false);
    let [image, setImage] = useState(null);

    let handleSubmit = async (e) => {
        e.preventDefault();

        // Storage.put('test.txt', 'File content', {
        //     progressCallback(progress) {
        //         console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        // },
        // });

        try{
            setIsUploading(true);
            let uploadedFile = null;
            if(image){
                let { identityId } = await Auth.currentCredentials();
                const filename = `/public/${identityId}/${Date.now()}-${image.name}`;

                uploadedFile = await Storage.put(filename, image, {contentType: image.type});
                console.log(uploadedFile);
            }

            const file = image ? {
                key: uploadedFile?.key,
                bucket: awsExports.aws_user_files_s3_bucket,
                region: awsExports.aws_project_region
            } : ""

        let input = image ? {name, description, foodType, cost, vendorId, image: file} : {name, description, foodType, cost, vendorId}
        API.graphql(graphqlOperation(createFoodItem, {input})).then(res => {
            console.log(res);
            setIsUploading(false);
            props.history.goBack();
        }).catch(err => {
            console.log(err);
        })
    } catch(err){
        console.log(err);
    }
    }

    let fileSelectedHandler = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }

    return (
        <div className='form'>
            <h1> Add a dish to your menu</h1>
            <div id="error" className="danger-text"></div>
            <form onSubmit={handleSubmit}>
                <div className="form-group col-12">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"  placeholder="Enter Name of Item"  onChange={(e) => {setName(e.target.value)}} />
                </div>

                <div className="form-group col-12">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter Description"  onChange={(e) => {setDescrition(e.target.value)}}/>
                </div>

                <div className="form-group col-12">
                    <label htmlFor="food-type">Food Type</label>
                    <input type="text" className="form-control" id="food-type" placeholder="Indian, Thai, Chinese etc"  onChange={(e) => {setFoodType(e.target.value)}}/>
                </div>

                <div className="form-group col-3">
                    <label htmlFor="cost">Cost</label>
                    <input type="number" className="form-control" id="cost" placeholder="Enter Cost"  onChange={(e) => {setCost(e.target.value)}}/>
                </div>
                <div className="form-group col-6">
                    <label>Upload Image</label>
                    <input type="file" onChange={fileSelectedHandler}/>
                    <small> <sup>*</sup> default image will be used if no image is uploaded</small>
                </div>
                <br/>
                <div>
                    {isUploading ? <span><i className="fas fa-spinner fa-spin"></i>&nbsp;Uploading</span> : ""}
                </div>
                <button className="btn btn-primary col-3">Submit</button>
            </form>
        </div>
    )
}

// disabled={isUploading || !imageAdded} 

export default withRouter(MenuForm)
