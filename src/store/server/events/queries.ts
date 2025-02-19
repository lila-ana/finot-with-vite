import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../utils/constants";
import { crudRequest } from "../../../utils/crudRequest";

const getEvents = async () => {
  return await crudRequest({
    method: "GET",
    url: `${API_BASE_URL}/events`,
  });
};

const getEventById = async (id: string) => {
  return await crudRequest({
    method: "GET",
    url: `${API_BASE_URL}/events/${id}`,
  });
};

export const useGetEvents = () => {
  return useQuery({ queryKey: ["events"], queryFn: getEvents });
};

export const useGetEventById = (eventId: string) => {
  return useQuery({
    queryKey: ["events", eventId],
    queryFn: () => getEventById(eventId),
  });
};
