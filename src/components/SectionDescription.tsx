interface IDesc {
  desc: string;
  color?: string;
}

export default function SectionDescription({ desc, color }: IDesc) {
  return (
    <div>
      <p className={`text-sm ${color}`}>{desc}</p>
    </div>
  );
}
