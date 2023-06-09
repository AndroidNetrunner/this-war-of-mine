import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This War of Mine boardgame</h1>
      <p>전쟁 속에서, 모두가 군인인 것은 아니다.</p>
      <Button
        variant="outline-secondary"
        onClick={() => router.push("/shelter")}
      >
        게임 시작하기
      </Button>
    </main>
  );
}
