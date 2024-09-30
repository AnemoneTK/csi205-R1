import { useState } from "react";
import Variable from "./Variable";
export default function Add() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <div className="row d-flex flex-row gap-1 justify-content-center align-items-center m-2 p-2 rounded border ">
      <div className="fs-1 fw-bold">
        {a} + {b} = {a + b}
      </div>
      <Variable name="A" value={a} setValue={setA} />
      <Variable name="B" value={b} setValue={setB} />
    </div>
  );
}
