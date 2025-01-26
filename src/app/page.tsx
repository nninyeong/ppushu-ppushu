import PrimaryLinkButton from "./components/ui/PrimaryLinkButton";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px]">
      <p className="text-white">
        동기부여/의미 설명 코멘트 이러이러한 맥락에서 합니다~
      </p>
      <PrimaryLinkButton moveTo='/punch/unreal/2'/>
    </div>
  );
}
