import { useState } from "react";
import { IusePostApi } from "./interface";
import { axiosInstance } from "./axiosInstance";
import { getCurrentJwt } from "../../feats/auth";

export const usePostApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const postReq = (input: IusePostApi) => {
    axiosInstance

      .post(input.route, input.body, {
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
  return { postReq, response, error, loading };
};
