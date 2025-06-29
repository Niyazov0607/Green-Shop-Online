import { useMutation } from "@tanstack/react-query";
import { instance } from "../hooks/instance";

export const Login = () => {
    return useMutation({
        mutationFn: (data: { email: string; password: string }) =>
            instance().post(
                "/user/sign-in?access_token=64bebc1e2c6d3f056a8c85b7",
                data
            ),
        onSuccess: (res) => {
            console.log(res.data);
        },
    });
};
