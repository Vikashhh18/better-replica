import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveWrapperProps {
  children: React.ReactNode
  className?: string
  variant?: "container" | "section" | "hero"
}

export function ResponsiveWrapper({ children, className, variant = "container" }: ResponsiveWrapperProps) {
  const baseClasses = {
    container: "responsive-container",
    section: "responsive-section responsive-container",
    hero: "responsive-hero responsive-container",
  }

  return <div className={cn(baseClasses[variant], className)}>{children}</div>
}
