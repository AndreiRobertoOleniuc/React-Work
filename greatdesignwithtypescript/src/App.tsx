import React, { FC } from "react";

interface CoolProps {
  foo: number;
  bar: string;
}

const Cool: FC<CoolProps> = (props) => {
  return (
    <div>
      {props.bar}
      {props.foo}
    </div>
  )
}

export default function App() {
  return (
    <Cool foo={23} bar={" is very cool"} />
  )
}