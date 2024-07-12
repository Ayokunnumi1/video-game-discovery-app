import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="flex justify-between bg-slate-500">
      <div className="">{children}</div>
      <button onClick={onClose} className="close">X</button>
    </div>
  );
};

export default Alert;
