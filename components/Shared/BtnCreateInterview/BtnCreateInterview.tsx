import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Headset } from "lucide-react";
import { FormCreateInterview } from "./FormCreateInterview";
import { Button } from "@/components/ui/button";

export function BtnCreateInterview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-500 to-blue-600 font-bold py-3 px-6 rounded-lg hover:from-purple-700 transition-all duration-100">
          Crear nueva entrevista
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center text-purple-400">
            Start Interview <Headset />
          </DialogTitle>
          <FormCreateInterview />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
