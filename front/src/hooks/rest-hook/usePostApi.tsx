import { useState } from "react";
import { IusePostApi } from "./interface";
import { axiosInstance } from "./axiosInstance";
import { getCurrentJwt } from "../../feats/auth";
import { AxiosResponse } from "axios";

export const usePostApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const postReq = (
    input: IusePostApi,
    cb?: (response: AxiosResponse<any, any>) => void
  ) => {
    axiosInstance
      .post(input.route, input.body, {
        headers: {
          authentication: getCurrentJwt(),
          ...input.customHeader,
        },
      })
      .then((res) => {
        setResponse(res.data);
        if (cb) {
          cb(res);
        }
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
