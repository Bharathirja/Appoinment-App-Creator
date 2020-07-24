import axios from "axios";

const setHeaders = isAuthRequired => {
    return new Promise((resolve, reject) => {
        if(isAuthRequired){
            let user = JSON.parse(window.sessionStorage.getItem('userToken'));
            resolve({
                "Content-Type": "application/json",
                Authorization: "aPPointmentaPPCreator " + user
            })
            
        }
        else {
            resolve({
                "Content-Type": "application/json"
            })
        }
    })
}

const logError = error => {
    if(error["response"]){
        console.log("Status code", error.response.status);
        console.log("Response data", error.response.data);
    }
    else{
        console.log("Most likely a server timeout or an internet connection error");
    }
}

class NetworkManager {
    static post(url, data, isAuthRequired = true, params = {}) {
        let config = {};
        return setHeaders(isAuthRequired)
            .then(headers => {
                config["headers"] = headers;
                config["params"] = params;
                console.log(url,data,config,isAuthRequired)
                return axios.post(url, data, config);
            })
            .catch(err => {
                if (err.response && (err.response.status === 401 || err.response.status === 403)) {
                    window.location.assign(window.location.origin + "/");
                }
                logError(err);
                throw err;
            });
    }

}

export default NetworkManager;