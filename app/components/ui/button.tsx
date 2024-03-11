type ButtonProps = React.HTMLAttributes<HTMLElement>;
const Button = ({ onClick, ...props }: ButtonProps) => {
  return (
    <>
      <button
        {...props}
        onClick={onClick}
        className="bg-red-500 rounded-e-sm hover:bg-red-300 text-white p-1"
      >
        Gönder
      </button>
    </>
  );
};

export default Button;
