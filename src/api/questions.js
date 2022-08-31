import axios from "axios";

const axiosclient = axios.create({
  baseURL: "http://localhost/",
});

export default {
    getQuestions() { 
        return axiosclient.get("/test.php");
    }
}
