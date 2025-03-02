import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../utils/constants";
import { crudRequest } from "../../../utils/crudRequest";

const fetchMemberAttendance = async () => {
  return await crudRequest({
    method: "GET",
    // url: "https://mocki.io/v1/ebed09c9-f0ae-44d2-9d6d-9fa5fbc0d56d",
    url: `${API_BASE_URL}/members`,
  });
};

export const useMemberAttendance = () => {
  return useQuery({
    queryKey: ["memberAttendance"],
    queryFn: fetchMemberAttendance,
  });
};
