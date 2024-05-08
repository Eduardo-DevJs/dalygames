import React, { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="max-w-screen-xl mx-auto sm:justify-between">{children}</div>;
}
