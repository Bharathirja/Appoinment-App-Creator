import {BASE_URL, CREATOR_API} from "../utilities/constant";
import NetworkManager from "../utilities/networkManager";

export default class creatorApi{

    static creatorInsert(data){
        return NetworkManager.post(BASE_URL + CREATOR_API.CREATOR_DETAILS, data, true);
    }

    static getCreatorDetails() {
        return NetworkManager.get(BASE_URL + CREATOR_API.GET_DETAILS, true);
    }

    static getSingleDetails(params) {
        return NetworkManager.get(BASE_URL + CREATOR_API.GET_SINGLE_DATA + params +"/", true)
    }

    static updateMerchantDetails(details) {
        // console.log(details.get("id"))
        const id  = details.get("id")
        
        return NetworkManager.put(BASE_URL + CREATOR_API.GET_SINGLE_DATA + id+"/", details)
    }

}