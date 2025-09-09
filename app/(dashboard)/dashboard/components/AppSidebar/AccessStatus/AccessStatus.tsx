"use client";
import { Badge } from "@/components/ui/badge";
import { StatusFreeTrial } from "./StatusFreeTrial";
import { StatusPaid } from "./StatusPaid";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AccessStatus() {
  const [open, setOpen] = useState(false);
  const hasPaid = false;
  const statusFree = true;

  if (hasPaid) {
    return <StatusPaid />;
  }
  if (statusFree) {
    return <StatusFreeTrial />;
  }

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div className="p-4 border-white bg-purple-800/20 border rounded-md">
      <h3 className="font-semibold text-xl mb-1"> 🛑 Limited Access</h3>
      <Badge className="w-full bg-red-700 py-1">Free Trial</Badge>
      <p className="text-sm mt-2 mb-3">
        Please upgrade to a paid plan to unlock all features.
      </p>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-600 font-bold py-3 px-6 rounded-lg hover:from-purple-700 transition-all duration-100">
            Unlock for 9,99 eur
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogHeader>
            <DialogTitle className="hidden">Purchase</DialogTitle>
            <div id="checkout-modal" className="min-h-[600px]" />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
