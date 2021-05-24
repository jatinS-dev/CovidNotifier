import axios from "axios";
import moment from "moment";

axios.defaults.baseURL = "http://localhost:5000/api/v1";

export const getAvailabilityByPin = async (pincode) => {
    const date = moment().format("DD-MM-YYYY");
    const { data } = await axios({
        url: `/availability/pin?pincode=${pincode}&date=${date}`,
        method: `get`
    })
    return data;
}

export const getAvailabilityByDistrict = async (districtCode) => {
    const date = moment().format("DD-MM-YYYY");
    const { data } = await axios({
        url: `/availability/district?district_id=${districtCode}&date=${date}`,
        method: `get`
    })
    return data;
}