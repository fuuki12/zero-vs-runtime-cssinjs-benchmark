import { useState, useCallback, Profiler } from "react";
import { StyledComponent } from "../src/runtime/StyledComponent";
import { TailwindComponent } from "./zeroruntime/TailwindComponent";

const onRenderCallback: (
  id: string,
  phase: "mount" | "update",
  actualDuration: number
) => void = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration);
};

export default function App() {
  const [lib, setLib] = useState<"styled" | "tailwind" | null>(null);
  const [key, setKey] = useState(0);

  const activateStyled = useCallback(() => {
    setLib("styled");
    setKey((prevKey) => prevKey + 1);
  }, []);

  const activateTailwind = useCallback(() => {
    setLib("tailwind");
    setKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <div>
      <button onClick={activateStyled}>Activate StyledComponent</button>
      <button onClick={activateTailwind}>Activate TailwindComponent</button>

      {lib === "styled" && (
        <Profiler key={key} id="StyledComponent" onRender={onRenderCallback}>
          <StyledComponent />
        </Profiler>
      )}

      {lib === "tailwind" && (
        <Profiler key={key} id="TailwindComponent" onRender={onRenderCallback}>
          <TailwindComponent />
        </Profiler>
      )}
    </div>
  );
}
