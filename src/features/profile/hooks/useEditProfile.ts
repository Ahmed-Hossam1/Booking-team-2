import { QueryClient, useMutation } from "@tanstack/react-query";
import { editProfile } from "../services/editProfile";

export const useEditProfile = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: editProfile,
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
