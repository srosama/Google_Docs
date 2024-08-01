import { googleIcon } from "@/utils";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function OpenId() {
    return (
        <>
            <div className="pt-2">
                <Separator />
                <Button id="formElementsRef"
                    size={"lg"}
                    className="bg-white text-black rounded-lg
                   w-[554px] h-[58px]
                   py-4 px-6
                   font-medium text-base
                   flex items-center gap-5 border 
                   hover:bg-gray-100 hover:text-gray-600"
                >
                    <div className="flex items-center justify-center w-full">
                        <img src={googleIcon} alt="Google Icon" width={17} />
                        <span className="ml-2">Sign in with Google</span>
                    </div>
                </Button>
            </div>

        </>
    )
}
