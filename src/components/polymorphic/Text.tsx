import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType>({
  as,
  size,
  color,
  children,
}: TextProps<E>) => {
  const Component = as || "div";
  return <Component className={`${size}-${color}`}>{children}</Component>;
};
