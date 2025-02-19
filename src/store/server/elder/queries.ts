import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../utils/constants";
import { crudRequest } from "../../../utils/crudRequest";

const getElder = async () => {
  return await crudRequest({
    method: "GET",
    url: `${API_BASE_URL}/elders`,
  });
};

const getElderById = async (id: string) => {
  return await crudRequest({
    method: "GET",
    url: `${API_BASE_URL}/elders/${id}`,
  });
};

export const useGetElders = () => {
  return useQuery({ queryKey: ["elders"], queryFn: getElder });
};

export const useGetElderById = (elderId: string) => {
  return useQuery({
    queryKey: ["elders", elderId],
    queryFn: () => getElderById(elderId),
  });
};
