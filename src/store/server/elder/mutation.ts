import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../utils/constants";
import { crudRequest } from "../../../utils/crudRequest";
import NotificationMessage from "../../../components/notification/notificationMessage";

const createElder = async (data: any) => {
  return await crudRequest({
    method: "POST",
    url: `${API_BASE_URL}/elders`,
    data,
  });
};

const updateElder = async (data: any, id: string) => {
  return await crudRequest({
    method: "PUT",
    url: `${API_BASE_URL}/elders/${id}`,
    data,
  });
};

const deleteElder = async (id: string) => {
  return await crudRequest({
    method: "DELETE",
    url: `${API_BASE_URL}/elders/${id}`,
  });
};

export const useCreateElders = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createElder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["elders"] });
      NotificationMessage.success({
        message: "Elder created successfully!",
        description: "Elder has been successfully created",
      });
    },
  });
};

export const useUpdateElders = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: any; id: string }) =>
      updateElder(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["elders"] });
      NotificationMessage.success({
        message: "Elder updated successfully!",
        description: "Elder has been successfully updated",
      });
    },
  });
};

export const useDeleteElders = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteElder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["elders"] });
      NotificationMessage.success({
        message: "Elder deleted successfully!",
        description: "Elder has been successfully deleted",
      });
    },
  });
};
