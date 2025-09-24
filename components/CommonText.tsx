// components/CommonText.tsx
import { Typography, theme } from "antd";
import { CSSProperties, PropsWithChildren } from "react";

const { Text } = Typography;

interface CommonTextProps {
  style?: CSSProperties;
  strong?: boolean;
  underline?: boolean;
  className?: string;
}

export const CommonText: React.FC<PropsWithChildren<CommonTextProps>> = ({
  children,
  style,
  ...rest
}) => {
  const { token } = theme.useToken();

  const commonStyle: CSSProperties = {
    fontSize: '12px',
    lineHeight: '22px',
    letterSpacing: '0.5px',
    color: token.colorGray,
    ...style,
  };

  return (
    <Text style={commonStyle} {...rest}>
      {children}
    </Text>
  );
};
