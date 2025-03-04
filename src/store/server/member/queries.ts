import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../utils/constants";
import { crudRequest } from "../../../utils/crudRequest";
import { Member } from "./interface";

const fetchMembers = async () => {
  return await crudRequest({
    method: "GET",
    // url: "https://mocki.io/v1/bcde6ec0-7b6d-43d2-a564-2e980aff7fa3",
    url: `${API_BASE_URL}/members`,
  });
};

const fetchMemberById = async (memberId: String) => {
  return await crudRequest({
    method: "GET",
    // url: `https://mocki.io/v1/bcde6ec0-7b6d-43d2-a564-2e980aff7fa3/${memberId}`,
    url: `${API_BASE_URL}/members/${memberId}`,
  });
};

export const useGetMembers = () => {
  return useQuery({
    queryKey: ["members"],
    queryFn: fetchMembers,
  });
};
export const useGetMemberById = (memberId: string) => {
  return useQuery<Member>({
    queryKey: ["candidate", memberId],
    queryFn: () => fetchMemberById(memberId),
  });
};
