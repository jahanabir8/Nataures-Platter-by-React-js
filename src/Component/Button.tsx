export interface ButtonProps {
  custom: string;
  className?: string;
}

export default function Button({ custom, className }: ButtonProps) {
  return (
    <button
      className={`cursor-pointer text-[20px] text-white font-semibold bg-[#179800] px-7.5 py-2.5 rounded border-2 border-[#179800] ${className}`}
    >
      {custom}
    </button>
  );
}
