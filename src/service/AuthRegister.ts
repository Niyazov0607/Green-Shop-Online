import { useMutation } from "@tanstack/react-query";
import { instance } from "../hooks/instance";

export const Register = () => {
    return useMutation({
        mutationFn: (data: {
            name: string;
            surname: string;
            email: string;
            password: string;
            confirmPassword: string;
        }) =>
            instance().post(
                "/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7",
                data
            ),
        onSuccess: (res) => {
            console.log(res.data);
        },
    });
};
