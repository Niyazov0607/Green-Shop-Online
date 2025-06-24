import { useMutation } from "@tanstack/react-query";
import { instance } from "../hooks/instance";

export const Login = () => {
    return useMutation({
        mutationFn: (data: { email: string; password: string }) =>
            instance().post("/auth/login", data),
        onSuccess: (res) => {
            console.log(res);
        },
    });
};
