import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../utils/constants";
import { crudRequest } from "../../../utils/crudRequest";
import NotificationMessage from "../../../components/notification/notificationMessage";

const createEvent = async (data: any) => {
  return await crudRequest({
    method: "POST",
    url: `${API_BASE_URL}/events`,
    data,
  });
};

const updateEvent = async (data: any, id: string) => {
  return await crudRequest({
    method: "PUT",
    url: `${API_BASE_URL}/events/${id}`,
    data,
  });
};

const deleteEvent = async (id: string) => {
  return await crudRequest({
    method: "DELETE",
    url: `${API_BASE_URL}/events/${id}`,
  });
};

export const useCreateEvents = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      NotificationMessage.success({
        message: "Event created successfully!",
        description: "Event has been successfully created",
      });
    },
  });
};

export const useUpdateEvents = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: any; id: string }) =>
      updateEvent(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      NotificationMessage.success({
        message: "Event updated successfully!",
        description: "Event has been successfully updated",
      });
    },
  });
};

export const useDeleteEvents = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteEvent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      NotificationMessage.success({
        message: "Event deleted successfully!",
        description: "Event has been successfully deleted",
      });
    },
  });
};
