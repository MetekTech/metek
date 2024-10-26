import type { PropsWithChildren } from "react";

export function Container(props: PropsWithChildren) {
  const { children } = props;

  return <div className="container mx-auto px-4 py-8">{children}</div>;
}
