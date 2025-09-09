import { Badge } from "@/components/ui/badge";
import React from "react";

export function StatusPaid() {
  return (
    <div className="flex items-start gap-4 p-3 border rounded-3xl bg-purple-500/20 text-white border-white shadow-lg">
      <div>
        <h3 className="text-2xl mb-2 font-semibold text-center">Full access</h3>
        <Badge variant="outline" className="w-full bg-purple-600 py-1">
          Activated pro plan
        </Badge>
        <p className="text-sm text-center mt-2">
          You have access to all features
        </p>
      </div>
    </div>
  );
}
