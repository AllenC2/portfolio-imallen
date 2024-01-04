import axios from "axios";
import { getApiUrl } from "../config";

export const getCVData = () => {{
    const url = getApiUrl("cv-landing");
    return axios.get(url).then(res => res.data);
}}
