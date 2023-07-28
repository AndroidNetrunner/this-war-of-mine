import { useEffect, useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobileOnly);
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>This War of Mine boardgame</h1>
      <h2>전쟁 속에서, 모두가 군인인 것은 아니다.</h2>
      <div className="items-center">
        <Button
          variant="secondary"
          onClick={() => router.push("/shelter")}
          size="lg"
        >
          게임 시작하기
        </Button>
      </div>
      {isMobileDevice && (
        <div>
          <p>
            이 웹사이트는 PC 또는 태블릿에서 최적화되어 있습니다. 최적화된
            경험을 위해, PC나 태블릿으로 접속해주세요.
          </p>
        </div>
      )}
      <br />
      <p>
        내전이 발발했을 때, 많은 사람들은 몇 주면 끝날 거라고 생각했다.
        <br />
        군대가 수도에 있는 반군을 포위하고 공급선을 모조리 차단한 지가 1년째다.
        <br />
        사람들은 여전히 도시에 갇힌 채로 허기와 질병, 그리고 끊임없는 포격의
        위협 아래에서 고통받고 있다.
        <br />
        그리고 이날도 이 끔찍한 전쟁의 종식을 기다리는 또 하나의 절박한 날이다.
      </p>
    </main>
  );
}
