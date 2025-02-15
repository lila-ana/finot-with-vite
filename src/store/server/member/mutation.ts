import { useMutation, useQueryClient } from "@tanstack/react-query";
import { crudRequest } from "../../../utils/crudRequest";
import NotificationMessage from "../../../components/notification/notificationMessage";
import { API_BASE_URL } from "../../../utils/constants";

const generateIncentive = async (data: any) => {
  return await crudRequest({
    url: `${API_BASE_URL}/incentives/generate/incentive`,
    method: "POST",
    // headers: requestHeader(),
    data,
  });
};

export const useGenerateIncentive = () => {
  const queryClient = useQueryClient();
  return useMutation(generateIncentive, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["incentiveFormula"] });
      NotificationMessage.success({
        message: "Incentive generated successfully!",
        description: "Incentive has been successfully generated",
      });
    },
  });
};
