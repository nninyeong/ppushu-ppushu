import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

export default function PrimaryLinkButton({moveTo}: {moveTo: string}) {
  return (
    <Link href={moveTo}>
        <PrimaryButton>이동하기</PrimaryButton>
    </Link>
  )
}
