import { useMutation, useQueryClient } from "@tanstack/react-query";
import { crudRequest } from "../../../utils/crudRequest";
import NotificationMessage from "../../../components/notification/notificationMessage";
import { API_BASE_URL } from "../../../utils/constants";

const createMember = async (data: any) => {
  return await crudRequest({
    method: "POST",
    url: `${API_BASE_URL}/members`,
    data,
  });
};

const updateMember = async (data: any, id: string) => {
  return await crudRequest({
    method: "PUT",
    url: `${API_BASE_URL}/members/${id}`,
    data,
  });
};

const deleteMember = async (member_id: string) => {
  return await crudRequest({
    method: "DELETE",
    url: `${API_BASE_URL}/members/${member_id}`,
  });
};

const importMember = async (data: FormData): Promise<any> => {
  console.log(data, "this is form data");
  return await crudRequest({
    method: "POST",
    url: `${API_BASE_URL}/import-members`,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useCreateMembers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      NotificationMessage.success({
        message: "Member created successfully!",
        description: "Member has been successfully created",
      });
    },
  });
};

export const useUpdateMembers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data, id }: { data: any; id: string }) =>
      updateMember(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      NotificationMessage.success({
        message: "Member updated successfully!",
        description: "Member has been successfully updated",
      });
    },
  });
};

export const useDeleteMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      NotificationMessage.success({
        message: "Member deleted successfully!",
        description: "Member has been successfully deleted",
      });
    },
  });
};

export const useImportMembers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: importMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });

      NotificationMessage.success({
        message: "Members imported successfully!",
        description: "Members imported successfully",
      });
    },
    onError: (error: any) => {
      console.log("Error importing members", error);

      const errorMessage =
        error?.response?.data?.message ||
        "An error occurred while importing members";

      NotificationMessage.error({
        message: "Error importing members",
        description: errorMessage,
      });
    },
  });
};
