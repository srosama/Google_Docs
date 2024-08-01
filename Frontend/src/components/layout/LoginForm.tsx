import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { blueLakeBg, hideIcon, viewIcon } from "@/utils";
import OpenId from "./OpenId";
import OrComponent from "../ui/or";
import usePasswordToggle from "@/hooks/usePasswordToggle";
import { useAuth } from "@/context/AuthContext";

const formSchema = z.object({
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters." })
        .regex(/[A-Z]/, { message: "Password must include at least one uppercase letter." })
        .regex(/[a-z]/, { message: "Password must include at least one lowercase letter." })
        .regex(/[0-9]/, { message: "Password must include at least one number." })
        .regex(/[^a-zA-Z0-9]/, { message: "Password must include at least one special character." }),
    email: z
        .string()
        .email({ message: "Invalid email address." })
        .min(5, { message: "Email must be at least 5 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
    const mainForm = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);
    const { inputType, Icon, toggleVisibility } = usePasswordToggle();
    const { login } = useAuth();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: FormValues) => {
        try {
            setLoading(true);
            await login(values.email, values.password);
            alert("Goode")
        }
        catch (err) {
            alert(err);
            console.log("Failed Osama...")
        }
    };



    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(mainForm.current, {
            duration: 1,
            opacity: 1, // Ensure full opacity
            ease: 'power2.inOut',
            delay: 2
        });

        tl.fromTo(
            "#formElementsRef",
            {
                opacity: 0,   // Start with hidden opacity
                y: 100,       // Start from 100px below the original position
            },
            {
                opacity: 1,   // End with full opacity
                y: 0,         // End at the original position
                duration: 0.3,
                ease: "elastic.Out", // Smooth easing function
                stagger: 0.2 // Sequential delay between each element's animation
            }
        );
    }, []);



    return (
        <div className="flex flex-col space-y-5 items-center justify-center
        relative overflow-hidden
        min-h-screen opacity-0" ref={mainForm}>
            <div className="space-y-3 mb-10">
                <h1 className="text-4xl text-center font-medium  text-[#040308]">
                    Login
                </h1>
                <p className="">
                    Don’t have an account?
                    <span className="pl-2 text-[#3980F6] hover:opacity-30 transition-all duration-200
                     cursor-pointer ">
                        Sign Up
                    </span>
                </p>
            </div>

            <Form {...form}>
                {loading && <p>Loading...</p>}
                <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-5">

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex flex-col space-y-4">
                                    <div className="flex relative items-center space-x-4">
                                        <FormControl id="formElementsRef">
                                            <Input
                                                {...field}
                                                className="
                                                    w-[554px] h-[58px] rounded-md
                                                    border-opacity-45
                                                    bg-white text-gray-900 placeholder-gray-500
                                                    pl-5 pr-4 py-2
                                                    placeholder:font-medium placeholder:text-sm
                                                    focus:outline-none focus:ring-2 focus:ring-blue-500
                                                    transition-all duration-300 ease-in-out
                                                    hover:border-blue-500 hover:shadow-lg
                                                    border-[1px]
                                                    relative
                                                    before:absolute before:top-[-2px] before:left-[-2px] before:w-full before:h-full
                                                    before:border-2 before:border-blue-500 before:transition-all before:duration-300
                                                    before:content-[''] before:z-[-1]
                                                "
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </FormControl>
                                    </div>
                                </div>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem id="formElementsRef">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex relative items-center space-x-4">
                                        <FormControl>
                                            <Input
                                                {...field}
                                                className="
                                                    w-[554px] h-[58px] rounded-md
                                                    border-opacity-45
                                                    bg-white text-gray-900 placeholder-gray-500
                                                    pl-5 pr-4 py-2
                                                    placeholder:font-medium placeholder:text-sm
                                                    focus:outline-none focus:ring-2 focus:ring-blue-500
                                                    transition-all duration-300 ease-in-out
                                                    hover:border-blue-500 hover:shadow-lg
                                                    border-[1px]
                                                    relative
                                                    before:absolute before:top-[-2px] before:left-[-2px] before:w-full before:h-full
                                                    before:border-2 before:border-blue-500 before:transition-all before:duration-300
                                                    before:content-[''] before:z-[-1]
                                                "
                                                type={inputType}
                                                placeholder="Password"
                                            />
                                        </FormControl>
                                            <div className="absolute right-5">
                                                <img onClick={toggleVisibility}
                                                className="cursor-pointer"
                                                src={Icon} alt="Google Icon" width={17} />
                                            </div>
                                    </div>
                                </div>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />

                    <p id="formElementsRef" className="text-[#3980F6]
                     cursor-pointer hover:opacity-30 transition-all duration-200
                     text-sm relative left-[27rem]">
                        Forget Password ?
                    </p>

                    <Button id="formElementsRef"
                        className="w-[554px] h-[58px] rounded-md bg-[#3980F6]
                    text-white font-medium 
                    hover:border
                    hover:bg-gray-100 hover:text-gray-600
                    hover:transition-all ease-in-out duration-300
                    "
                        type="submit"
                    >
                        Login
                    </Button>
                    <OrComponent />
                    <OpenId />
                </form>
            </Form>


            <div className="absolute 
            -z-10 bottom-[-350px] opacity-80
            right-[-330px] 
            ">
                <img src={blueLakeBg} alt="blueLake" className="w-full h-auto" />
            </div>

            <div className="absolute 
            -z-10 top-[-350px]  opacity-80
            left-[-330px] -rotate-12
            
            ">
                <img src={blueLakeBg} alt="blueLake" className="w-full h-auto" />
            </div>
        </div>
    );
}
