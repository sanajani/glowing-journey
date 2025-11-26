import { userAPI } from "../../utils/aixos/apis";
import { useMutation, useQueryClient } from '@tanstack/react-query'


export const useCreateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (userData) => {
            const response = await userAPI.createUser(userData);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] })
        }
    })
}
