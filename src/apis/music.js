import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getSong = (sid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await instance({
        url: "/song",
        method: "get",
        params: {
          id: sid,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const getDetailSong = (sid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await instance({
        url: "/song",
        method: "get",
        params: {
          id: sid,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
