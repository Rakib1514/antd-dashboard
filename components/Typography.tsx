"use client";

import { Typography } from "antd";
import { BaseType } from "antd/es/typography/Base";

const { Title: AntDTitle, Paragraph: AntDParagraph, Text: AntDText } = Typography;

type TitleProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | undefined;
  style?: React.CSSProperties;
};

export function Title({ children, level, style }: TitleProps) {
  return (
    <AntDTitle level={level} style={style}>
      {children}
    </AntDTitle>
  );
}

export  function Paragraph({ children }: { children: React.ReactNode }) {
  return <AntDParagraph>{children}</AntDParagraph>;
}


interface TextProps {
  children: React.ReactNode;
  type?: BaseType | undefined;
  strong?: boolean | undefined;
}


export function Text({children, type, strong }: TextProps) {
  return (
    <AntDText type={type} strong={strong} >{children}</AntDText>
  )
}



