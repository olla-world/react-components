import './button.css';

export interface ButtonProps {
  fill?: boolean,
  type?: 'default' | 'primary' | 'danger' | 'warning'| 'success' | 'info';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  fill = true,
  type,
  size = 'md',
  label,
  ...props
}: ButtonProps) => {
  const mode = type || "transparent";

  return (
    <button
      type="button"
      className={[
        'penta-button', 
        `penta-button--${size}`, 
        `penta-button--${fill? mode: `${mode}-outlined`}`,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
