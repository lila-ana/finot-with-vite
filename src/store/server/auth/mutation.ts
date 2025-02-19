import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL } from "../../../utils/constants";
import { crudRequest } from "../../../utils/crudRequest";
import NotificationMessage from "../../../components/notification/notificationMessage";

const login = async (data: any) => {
  return await crudRequest({
    method: "POST",
    url: `${API_BASE_URL}/login`,
    data,
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
      NotificationMessage.success({
        message: "User Logged in successfully!",
        description: "user has been successfully logged in",
      });
    },
  });
};
const register = async (data: any) => {
  return await crudRequest({
    method: "POST",
    url: `${API_BASE_URL}/register`,
    data,
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["register"] });
      NotificationMessage.success({
        message: "User registered in successfully!",
        description: "user has been successfully registered",
      });
    },
  });
};
