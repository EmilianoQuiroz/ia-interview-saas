import { Hand, Mic, MicOff, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

export function UserBoxes() {
  const { user } = useUser();
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-5">
        <div className="relative h-[400px]">
          <div className="h-full w-full bg-[#fff]/30 backdrop-blur-lg relative rounded-md">
            <div
              className="absolute inset-0 z-0 rounded-md"
              style={{
                backgroundImage: `radial-gradient(circle 500px at %50 100px, rgba(139, 92, 246, 0.5), transparent 70%)`,
              }}
            />
            <div className="z-20 relative p-4 flex flex-col items-center justify-center gap-2 h-full">
              <div className="relative">
                {/* Cuando la IA este hablando */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex absolute h-16 w-16 animate-pulse rounded-full bg-blue-400 opacity-50"></span>
                </span>
                <div className="border-blue-200 bg-blue-100 border rounded-full p-2 relative z-10">
                  <Image
                    src="/assets/bot.png"
                    alt="AI Interviewer"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <p className="text-lg font-semibold">AI Interviewer</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px]">
          <div
            className={cn(
              "h-full w-full bg-[#fff]/30 backdrop-blur-lg relative rounded-md"
            )}
            // TODO: When is speaking put a class
          />
          <div
            className="absolute inset-0 z-0 rounded-md"
            style={{
              backgroundImage:
                "radial-gradient(circle 500px at %50 100px, rgba(255, 220, 190, 0.5), transparent)",
            }}
          >
            <div className="p-4 flex flex-col items-center justify-center gap-2 h-full z-10 relative rounded-md">
              <div className="relative">
                {/* TODO: filter if is not speaking */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="animate-pulse absolute inline-flex h-20 w-20 rounded-full bg-amber-400 opacity-50"></span>
                </span>
                <div className="bg-amber-200 rounded-full p-1 relative z-10">
                  <Image
                    src={user?.imageUrl ?? "/assets/user.png"}
                    alt="User"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
              </div>
              <p className="text-lg font-semibold">
                {user?.firstName ?? "User"}
              </p>
            </div>
          </div>
        </div>

        {/* Botones funcionales de la llamada */}
      </div>
      <div className="flex justify-center items-center gap-4">
        <div
          className="p-2 bg-gray-500 text-white rounded-full"
          onClick={() => {
            console.log("Mute/Unmute");
          }}
        >
          {/** TODO: add icon when is muted or unmuted */}
          <MicOff className="h-5 w-5" />
        </div>
        <div className="p-2 bg-gray-500 text-white rounded-full">
          <Hand className="h-5 w-5" />
        </div>
        <Button
          className="px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded-full hover:text-green-400 cursor-pointer"
          onClick={() => {
            console.log("Start session");
          }}
        >
          Start session
          <Phone className="h-5 w-5 rotate-[140deg]" />
        </Button>
        <div className="px-6 py-2 bg-red-500 hover:bg-red-700 hover:text-red-400 text-white rounded-full cursor-pointer">
          <Phone className="h-5 w-5 rotate-[140deg]" />
        </div>
      </div>
    </div>
  );
}
