

interface Props {
  text: string;
  onClick: () => void
}

const Button = ({ text, onClick }: Props) => {
  
  return (
    <>
      <button onClick={onClick} className="button p-2 rounded-full bg-slate-500">{text}</button>
      
    </>
  );
};

export default Button;
