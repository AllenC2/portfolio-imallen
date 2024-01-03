import axios from "axios";
import { getApiUrl } from "../config";

export const getPosts = () => {{
    const url = getApiUrl("posts");
    return axios.get(url).then(res => res.data);
}}

export const getSinglePost = ({id}) => {
    const url = getApiUrl(`posts/${id}`);
    return axios.get(url).then(res => res.data);
}
