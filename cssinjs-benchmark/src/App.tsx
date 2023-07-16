import { useState, useEffect, useCallback } from "react";
import { StyledComponent } from "../src/runtime/StyledComponent";
import { TailwindComponent } from "./zeroruntime/TailwindComponent";

export default function App() {
  const [lib, setLib] = useState("styled");

  const toggleLib = useCallback(() => {
    setLib((prevLib) => (prevLib === "styled" ? "tailwind" : "styled"));
  }, []);

  // 初回レンダリング時に実行する。
  useEffect(() => {
    console.time("Rendering Time");
    setLib("tailwind");
  }, []);

  // libの変更があった場合に実行する。
  useEffect(() => {
    if (lib === "tailwind") {
      console.timeEnd("Rendering Time");
    }
  }, [lib]);

  return (
    <div>
      <button onClick={toggleLib}>
        Switch to {lib === "styled" ? "Tailwind" : "Styled"}
      </button>
      {lib === "styled" ? <StyledComponent /> : <TailwindComponent />}
    </div>
  );
}
