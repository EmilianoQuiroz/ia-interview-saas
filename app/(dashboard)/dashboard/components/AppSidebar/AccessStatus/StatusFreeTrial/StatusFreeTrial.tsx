import { Badge } from "@/components/ui/badge";

export function StatusFreeTrial() {
  return (
    <div className="flex items-start gap-4 p-3 border rounded-3xl bg-blue-500/20 text-white border-white shadow-lg">
      <div>
        <h3 className="text-2xl mb-2 font-semibold text-center">
          Limited Access
        </h3>
        <Badge variant="outline" className="w-full bg-blue-900 py-1">
          Free Trial
        </Badge>
        <p className="text-sm text-center mt-2">You have limited access</p>
      </div>
    </div>
  );
}
