import { ReactNode } from 'react';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
