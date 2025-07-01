import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'secondary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium duration-200 cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-background-lightblue text-text-black hover:brightness-110',
    secondary: 'text-text-blue hover:text-text-white hover:bg-hover-button',
    ghost: 'text-text-blue hover:text-text-white p-1 rounded hover:bg-hover-button'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
