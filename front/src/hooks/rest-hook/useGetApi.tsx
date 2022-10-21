import { useState, useEffect, useCallback } from "react";
import { IuseApi } from "./interface";
import { axiosInstance } from "./axiosInstance";
import { getCurrentJwt } from "../../feats/auth";

export const useGetApi = (input: IuseApi) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = useCallback(() => {
    axiosInstance

      .get(input.route, {
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
  }, [input]);

  useEffect(() => {
    fetchData();
  }, [input, fetchData]);

  // custom hook returns value
  return { response, error, loading };
};
