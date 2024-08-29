import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState, ComponentProps } from "react";

type PasswordInputProps = ComponentProps<typeof Input>;

export default function PasswordInput(props: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative flex items-center">
            <Input
                {...props}
                type={showPassword ? "text" : "password"}
                className="pr-10"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2"
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
    );
}