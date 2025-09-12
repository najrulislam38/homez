import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="px-5 lg:px-10">
      <div className="max-w-[1200px] mx-auto ">{children}</div>
    </div>
  );
}
