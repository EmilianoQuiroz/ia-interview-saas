import { MetricCardProps } from "./MetricCard.types";

export function MetricCard(props: MetricCardProps) {
  const { title, value, icon } = props;
  return (
    <div className="flex flex-col items-center p-4 bg-white/20 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-2">{icon}</div>
      <span className="text-3xl font-extrabold">{value}</span>
      <p className="text-sm text-slate-200 mt-3">{title}</p>
    </div>
  );
}
