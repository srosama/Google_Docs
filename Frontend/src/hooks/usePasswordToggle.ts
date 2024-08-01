import { hideIcon, viewIcon } from "@/utils";
import { useState } from "react";

const usePasswordToggle = () => {
    const [visible, setVisibility] = useState(false);

    const toggleVisibility = () => setVisibility(!visible);

    const inputType = visible ? "text" : "password";

    const Icon = visible ? viewIcon : hideIcon;

    return {
        inputType,
        Icon,
        toggleVisibility
    };
};

export default usePasswordToggle;
