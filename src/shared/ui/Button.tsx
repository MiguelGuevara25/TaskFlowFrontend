interface ButtonProps {
  colorButton?: string;
  typeButton?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
}

const Button = ({
  colorButton = "bg-indigo-500",
  typeButton = "button",
  text,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${colorButton} text-white py-2 px-4 rounded-md cursor-pointer font-semibold`}
      type={typeButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
