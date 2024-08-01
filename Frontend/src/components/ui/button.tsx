import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib"


const buttonVariants = cva(
  "yesinline-flex yesitems-center yesjustify-center yeswhitespace-nowrap yesrounded-md yestext-sm yesfont-medium yestransition-colors focus-visible:yesoutline-none focus-visible:yesring-1 focus-visible:yesring-ring disabled:yespointer-events-none disabled:yesopacity-50",
  {
    variants: {
      variant: {
        default:
          "yesbg-primary yestext-primary-foreground yesshadow hover:yesbg-primary/90",
        destructive:
          "yesbg-destructive yestext-destructive-foreground yesshadow-sm hover:yesbg-destructive/90",
        outline:
          "yesborder yesborder-input yesbg-background yesshadow-sm hover:yesbg-accent hover:yestext-accent-foreground",
        secondary:
          "yesbg-secondary yestext-secondary-foreground yesshadow-sm hover:yesbg-secondary/80",
        ghost: "hover:yesbg-accent hover:yestext-accent-foreground",
        link: "yestext-primary yesunderline-offset-4 hover:yesunderline",
      },
      size: {
        default: "yesh-9 yespx-4 yespy-2",
        sm: "yesh-8 yesrounded-md yespx-3 yestext-xs",
        lg: "yesh-10 yesrounded-md yespx-8",
        icon: "yesh-9 yesw-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
