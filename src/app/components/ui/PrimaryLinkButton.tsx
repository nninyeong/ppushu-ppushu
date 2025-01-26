import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

export default function PrimaryLinkButton({moveTo, label}: {moveTo: string, label?: string;}) {
  return (
    <Link href={moveTo} aria-label={label}>
        <PrimaryButton>이동하기</PrimaryButton>
    </Link>
  )
}
