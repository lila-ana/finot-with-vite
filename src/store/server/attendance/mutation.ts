import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../utils/constants";
import { crudRequest } from "../../../utils/crudRequest";
import NotificationMessage from "../../../components/notification/notificationMessage";

const postAttendance = async (data: any) => {
  return await crudRequest({
    method: "POST",
    url: `${API_BASE_URL}/attendances`,
    data,
  });
};

export const useSendAttendance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postAttendance,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
      NotificationMessage.success({
        message: "Attendance registered successfully!",
        description: "users attendance has been successfully registered.",
      });
    },
  });
};
