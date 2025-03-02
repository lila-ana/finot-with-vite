import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../utils/constants";
import { crudRequest } from "../../../utils/crudRequest";
import NotificationMessage from "../../../components/notification/notificationMessage";
import { MarkAttendancePayload } from "./interface";

const markAttendance = async (data: MarkAttendancePayload) => {
  return await crudRequest({
    method: "POST",
    url: `${API_BASE_URL}/attendances`,
    data,
  });
};
const updateAttendance = async (data: MarkAttendancePayload) => {
  return await crudRequest({
    method: "PUT",
    url: `${API_BASE_URL}/attendances/${data?.member_id}`,
    data,
  });
};

export const useMarkAttendance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: markAttendance,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memberAttendance"] });
      NotificationMessage.success({
        message: "Attendance marked successfully!",
        description: "The user's attendance has been recorded.",
      });
    },
  });
};
