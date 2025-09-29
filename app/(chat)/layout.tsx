import ChatLayout from "@/components/ChatLayout";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper showSider={false} showFooter={false}>
      <ChatLayout >{children}</ChatLayout>
    </LayoutWrapper>
  );
}
