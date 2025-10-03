import { roles } from "@/components/Shared/BtnCreateInterview/FormCreateInterview/FormCreateInterview.data";
import { InterviewImageProps } from "./InerviewImage.types";

export function InterviewImage(props: InterviewImageProps) {
  const { interview } = props;
  const roleColors: Record<string, string> = {
    frontend: "bg-blue-600/20 border-blue-400/30 text-blue-300",
    backend: "bg-green-600/20 border-green-400/30 text-green-300",
    fullstack: "bg-purple-600/20 border-purple-400/30 text-purple-300",
    mobile: "bg-yellow-600/20 border-yellow-400/30 text-yellow-300",
    devops: "bg-red-600/20 border-red-400/30 text-red-300",
    data_scientist: "bg-pink-600/20 border-pink-400/30 text-pink-300",
  };

  const roleInfo = roles.find((r) => r.value === interview.rol);
  return (
    <div className={`p-2 rounded-md border ${roleColors[interview.rol]}`}>
      <span className="text-3xl">{roleInfo?.icon}</span>
    </div>
  );
}
