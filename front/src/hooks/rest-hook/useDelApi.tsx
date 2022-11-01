import { useState } from "react";
import { IuseApi } from "./interface";
import { axiosInstance } from "./axiosInstance";
import { getCurrentJwt } from "../../feats/auth";

export const useDelApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const delReq = (input: IuseApi) => {
    axiosInstance
      .delete(input.route, {
        headers: {
          authentication: getCurrentJwt(),
          ...input.customHeader,
        },
      })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  // custom hook returns value
  return { delReq, response, error, loading };
};
