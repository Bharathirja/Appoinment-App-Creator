import {BASE_URL ,LOGIN_API} from "../utilities/constant";
import NetworkManager from "../utilities/networkManager";

export default class LoginApi{

    static login(data){
        return NetworkManager.post(BASE_URL + LOGIN_API.LOGIN, data, false);
    }
}