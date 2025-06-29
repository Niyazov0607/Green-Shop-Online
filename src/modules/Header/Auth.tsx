import { useNavigate } from "react-router";
import { Login } from "../../service/AuthLogin";
import { Register } from "../../service/AuthRegister";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog";
import { BiLogInCircle } from "react-icons/bi";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export function Auth() {
    const [activeTab, setActiveTab] = useState<"login" | "register">("login");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { mutate: loginMutation } = Login();
    const { mutate: registerMutation } = Register();

    function handleLogin(e: FormEvent) {
        e.preventDefault();
        const data = {
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value,
        };

        loginMutation(data, {
            onSuccess: () => {
                toast.success("Login successful");
                setOpen(false);
                navigate("/");
            },
            onError: (err: any) => {
                toast.error("Login failed", {
                    description:
                        err?.response?.data?.message || "Please try again.",
                });
            },
        });
    }

    function handleRegister(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name") as string,
            surname: formData.get("surname") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            confirmPassword: formData.get("confirmPassword") as string,
        };

        registerMutation(data, {
            onSuccess: () => {
                toast.success("Registration successful");
                setOpen(false);
                navigate("/login");
            },
            onError: (err: any) => {
                toast.error("Registration failed", {
                    description:
                        err?.response?.data?.message || "Please try again.",
                });
            },
        });
    }

    const renderForm = () => {
        if (activeTab === "login") {
            return (
                <form onSubmit={handleLogin} className="space-y-4">
                    <Input placeholder="Email" name="email" required />
                    <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                    />
                    <Button className="w-full mt-2" type="submit">
                        Login
                    </Button>
                </form>
            );
        } else {
            return (
                <form onSubmit={handleRegister} className="space-y-4">
                    <Input name="name" placeholder=" Name" required />
                    <Input name="surname" placeholder="Surname" required />
                    <Input
                        name="email"
                        placeholder="Email"
                        required
                        type="email"
                    />
                    <Input
                        name="password"
                        placeholder="Password"
                        type="password"
                        required
                        minLength={6}
                    />
                    <Input
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        required
                    />
                    <Button className="w-full mt-2" type="submit">
                        Register
                    </Button>
                </form>
            );
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="shadow-none hover:bg-[#EBEFF3] hover:text-[#545D6A] cursor-pointer bg-transparent border-none"
                    variant="outline"
                >
                    <BiLogInCircle size={25} />
                    Login
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex gap-4 justify-center">
                        <button
                            onClick={() => setActiveTab("login")}
                            className={`text-lg cursor-pointer ${
                                activeTab === "login"
                                    ? "font-bold text-[#134E9B]"
                                    : "text-gray-500"
                            }`}
                        >
                            Login
                        </button>
                        <span className="text-gray-300">|</span>
                        <button
                            onClick={() => setActiveTab("register")}
                            className={`text-lg cursor-pointer ${
                                activeTab === "register"
                                    ? "font-bold text-[#134E9B]"
                                    : "text-gray-500"
                            }`}
                        >
                            Register
                        </button>
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">{renderForm()}</div>
            </DialogContent>
        </Dialog>
    );
}
