import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import {
  CheckCircle,
  TrendingUp,
  ClipboardCheck,
  Clock,
} from "lucide-react";
import { MetricCard, InterviewsList } from "./components";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }
  const interviews = await db.interview.findMany({
    where: { userId },
    select: { startedAt: true, completedAt: true, transcript: true },
  });
  const total = interviews.length;
  const completedInterviews = interviews.filter((i) => i.completedAt !== null);
  const totalDurationMs = completedInterviews.reduce((acc, i) => {
    return acc + (i.completedAt!.getTime() - i.startedAt.getTime());
  }, 0);
  const avgDuration = completedInterviews.length
    ? Math.round(totalDurationMs / completedInterviews.length / 1000 / 60)
    : 0;
  const successRate = total > 0 ? 100 : 0;
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 rounded-md p-6 bg-white/10 backdrop-blur-lg text-thite border border-white/20 ">
        <MetricCard
          icon={<ClipboardCheck className="w-8 h-8 text-blue-400" />}
          title="Total Interviews"
          value={total}
        />
        <MetricCard
          icon={<CheckCircle className="w-8 h-8 text-green-400" />}
          title="Completed Interviews"
          value={completedInterviews.length}
        />
        <MetricCard
          icon={<Clock className="w-8 h-8 text-yellow-400" />}
          title="Average Duration"
          value={`${avgDuration} min`}
        />
        <MetricCard
          icon={<TrendingUp className="w-8 h-8 text-red-400" />}
          title="Success Rate"
          value={successRate}
        />
      </div>
      <div>
        <div className="mt-4 p-4 bg-blue-600/20 border border-blue-400/30 rounded-md">
          <div className="text-sm text-blue-200">
            <strong>💡aviso: </strong>
            Esta es una versión inicial de la aplicación. Próximamente se añadirán
            más funcionalidades y mejoras. ¡Gracias por probarla!
          </div>
        </div>
      </div>

      <InterviewsList />
    </div>
  );
}
