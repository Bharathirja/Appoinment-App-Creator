import {BASE_URL, CREATOR_API} from "../utilities/constant";
import NetworkManager from "../utilities/networkManager";

export default class LoginApi{

    static creator(data){
        return NetworkManager.post(BASE_URL + CREATOR_API.CREATOR_DETAILS, data, true);
    }
}