interface IHeader {
  title: string;
  color?: string;
}

export default function SectionHeader({ title, color }: IHeader) {
  return (
    <div>
      <h2 className={`text-3xl font-semibold ${color} mb-4`}>{title}</h2>
    </div>
  );
}
