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
        return NetworkManager.get(BASE_URL + CREATOR_API.GET_SINGLE_DATA + params + "/", true)
    }

    static updateMerchantDetails(data) {
        console.log(data)
        
        return NetworkManager.put(BASE_URL + CREATOR_API.GET_SINGLE_DATA + data.id, data, true)
    }

}