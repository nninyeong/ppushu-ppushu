'use client'
import { ReactNode } from "react";
import Button from "./Button";

const defaultSize = 'w-[200px] h-[60px]';

export default function PrimaryButton({
  children,
  className,
  size = defaultSize,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  size?: string;
  onClick?: () => void;
}) {
  return <Button onClick={onClick} className={`bg-blue-300 text-white font-bold rounded ${size} ${className}`}>{children}</Button>;
}
