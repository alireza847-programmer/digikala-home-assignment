export interface MainLayoutProps {
  withHeader?: boolean;
  title?: string;
  withClose?: boolean;
  rightIcon?: JSX.Element;
  onClosePress?: () => void;
}
