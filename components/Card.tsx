'use client'

import { Card as AntdCard } from "antd";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  title?: string;
  hoverable?: boolean;
  style?: React.CSSProperties;
  itemId?: string | number;
};

export default function Card({ children, title, hoverable, style, itemId }: Props) {

  const router = useRouter();
  
  
  return (
    <AntdCard title={title} hoverable={hoverable} style={style} onClick={() => router.push(`/dashboard/food-menu/${itemId}`)}>
      {children}
    </AntdCard>
  );
}
