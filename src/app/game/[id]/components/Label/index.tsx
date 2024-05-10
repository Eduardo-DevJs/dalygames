interface LabelProps {
  name: string;
}

export default function Label({ name }: LabelProps) {
  return (
    <div className="flex-grow sm:flex-grow-0 py-1 px-3 bg-slate-300 text-black text-center rounded-lg hovver:font-bold duration-100">
      {name}
    </div>
  );
}
