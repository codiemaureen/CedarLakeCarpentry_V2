"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function Dialog(props) {
  return <DialogPrimitive.Root {...props} />;
}

export function DialogTrigger(props) {
  return <DialogPrimitive.Trigger {...props} />;
}

export function DialogContent({ children, className = "", ...props }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="dialogOverlay" />

      <DialogPrimitive.Content className={`dialogContent ${className}`} {...props}>
        {children}

        <DialogPrimitive.Close className="dialogClose" aria-label="Close">
          <X size={22} />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}