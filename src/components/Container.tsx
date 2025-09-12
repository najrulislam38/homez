import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="max-w-[1200px] mx-auto px-4 ">{children}</div>;
}
