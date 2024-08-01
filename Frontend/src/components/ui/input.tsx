import * as React from "react"
import { cn } from "../lib"


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "yesflex yesh-9 yesw-full yesrounded-md yesborder yesborder-input yesbg-transparent yespx-3 yespy-1 yestext-sm yesshadow-sm yestransition-colors file:yesborder-0 file:yesbg-transparent file:yestext-sm file:yesfont-medium placeholder:yestext-muted-foreground focus-visible:yesoutline-none focus-visible:yesring-1 focus-visible:yesring-ring disabled:yescursor-not-allowed disabled:yesopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
