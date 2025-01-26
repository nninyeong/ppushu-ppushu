import { ReactNode } from "react";

export default function Button({
  children,
  className,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button";
}) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
