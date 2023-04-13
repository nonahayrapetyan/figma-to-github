import { SButton } from './button.styles';
import { TButtonProps } from './Button.types';

const Button = ({ ...props }: TButtonProps) => {
  return <SButton {...props} />;
};

export default Button;
