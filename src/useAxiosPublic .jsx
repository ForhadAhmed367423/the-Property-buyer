import axios from "axios";

const secure = axios.create({
    baseURL:"http://localhost:5000",
})

const useAxiosPublic = () => {
  return secure;
};

export default useAxiosPublic;