import { Auth } from "aws-amplify";

function getAuthUser(callback) {
    Auth.currentAuthenticatedUser().then(user => {
        return user;
    }).catch(err => {
        return null;
    });
}

//  user.attributes.custom:userRole

export default getAuthUser
