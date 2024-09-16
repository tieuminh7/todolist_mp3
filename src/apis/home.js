import axios from "../axios";

export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const reponse = await axios({
        url: "/",
        method: "get",
      });
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
  });
