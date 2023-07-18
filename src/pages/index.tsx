import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This War of Mine boardgame</h1>
      <p>전쟁 속에서, 모두가 군인인 것은 아니다.</p>
      <p>
        매일 밤 돌아오면 너는 편안히 자고 있지. 그런 네가 부럽구나. 영웅이
        날아다니는 너의 세계에는 선과 악, 흑과 백만이 있으니 말이야. 하지만
        아빠의 세상은 온통 회색으로 칠해져있어. 옳은 길이 무엇인지 알려주는
        이정표도 없단다. 그러니 감 하나만 믿고서 옳은 일을 했기를 바래야만 해.
        그런 게 있기라도 하면 말이야.
        <br />
        하지만 전쟁이란 세상에서는, 살아남기 위해선 때로는 흑과 백, 선과 악을
        넘어서서 무엇이든 해야만 하는 거야. 그것이 아빠의 현실이지. 네가 잠들어
        있는 동안에도 아빠는 그 회색의 세상에서 생존을 위한 싸움을 멈출 수 없어.
        그래서 아빠는 때때로 자신이 행하는 일이 옳은 것인지, 그것이 정말 필요한
        일인지를 잃어버리곤 해. 그게 전쟁이란 거란다, 아이야.
      </p>
      <Button
        variant="outline-secondary"
        onClick={() => router.push("/shelter")}
      >
        게임 시작하기
      </Button>
    </main>
  );
}
