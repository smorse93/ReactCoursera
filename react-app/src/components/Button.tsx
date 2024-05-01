import React, { ReactNode } from "react";
import Alert from "./Alert";

interface ButtonProps {
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: ButtonProps) {
  return (
    <Alert>My Alert</Alert>
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
