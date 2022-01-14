import axios from "axios";
import config from "../config";

export interface ApiInterface {
  loginUser:(emailOrUsername:string, password:string) => Promise<any>;
}

class Api implements ApiInterface {

  private readonly apiUrl = config.apiUrl;
  
  public async loginUser(emailOrUsername:string, password:string) {
    const url = `${this.apiUrl}user/login`;
    const data = {
      emailOrUsername:emailOrUsername,
      password:password
    }
    const result = await axios.post(url, data, { withCredentials:true });
    return result;
  }
}

export default Api;