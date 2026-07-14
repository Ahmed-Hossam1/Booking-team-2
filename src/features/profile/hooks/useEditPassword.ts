import { QueryClient, useMutation } from "@tanstack/react-query";

import { editPassword } from "../services/editPassword";

export const useEditPassword = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: editPassword,
    onSuccess: () => {
      alert("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error) => {
      //TODO handle error properly, maybe with a toast notification and redirect if unauthorized
      alert(`Error updating profile: ${error.message}`);
    },
  });
};
