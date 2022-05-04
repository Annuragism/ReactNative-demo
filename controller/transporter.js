const axios = require("axios").default;
import constant from "../constant";

export async function GET(url) {
  try {
    if (!url) {
      return `Please Provide API Endpoint!`;
    }
    let responseJson = await axios.get(`${constant.BASEURL}${url}`);

    return await responseJson.data;
  } catch (error) {
    return error;
  }
}

export async function POST(url, reqPaylod) {
  try {
    console.log(`${constant.BASEURL}${url}`);

    if (!url) {
      return `Please Provide API Endpoint!`;
    }
    let responseJson = await axios.post(`${constant.BASEURL}${url}`, reqPaylod);
    // console.log(responseJson);
    return responseJson.data;
  } catch (error) {
    return error;
  }
}
