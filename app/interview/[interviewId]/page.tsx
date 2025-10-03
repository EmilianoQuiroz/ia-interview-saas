"use client";
import { Interview } from "@prisma/client";
import axios from "axios";
import { User } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserBoxes } from "./components/UserBoxes";

export default function InterviewPage() {
  const params = useParams();
  const interviewId = params.interviewId;
  const [interview, setInterview] = useState<Interview>();
  const router = useRouter();

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await axios.get(`/api/interview/${interviewId}`);
        setInterview(response.data);
      } catch (error) {
        console.error("Error fetching interview:", error);
        //router.push("/dashboard");
      }
    };
    if (interviewId) {
      fetchInterview();
    }
  }, [interviewId, router]);

  return (
    <div className="max-w-6xl h-full mx-auto p-6 space-y-6 flex flex-col justify-center items-center">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            Interview in progress
            <span className="mr-1.5 flex h-3 w-3 items-center">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
            </span>
          </h1>
          <p className="text-foreground/80 capitalize">Tematica: Level Level</p>
        </div>
      </div>
      <UserBoxes />
    </div>
  );
}
