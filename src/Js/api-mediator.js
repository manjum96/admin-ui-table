import Axios from "axios";
const baseURL = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

  export const getUserDetailsDetails = async() => {
    const {data: UserDetails} = await Axios.get(baseURL);
    return UserDetails;
  }