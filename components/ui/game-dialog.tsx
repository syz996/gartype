"use client";

import { useState, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Maximize2, Minimize2 } from "lucide-react";

interface GameDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GameDialog({ isOpen, onClose }: GameDialogProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dialogContentRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      dialogContentRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        ref={dialogContentRef}
        className="max-w-[95vw] h-[90vh] p-0 gap-0 bg-black border-purple-500/20"
      >
        <div className="relative w-full h-full">
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 z-50 p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
          >
            {isFullscreen ? (
              <Minimize2 className="w-6 h-6 text-white" />
            ) : (
              <Maximize2 className="w-6 h-6 text-white" />
            )}
          </button>
          <iframe
            src="https://html-classic.itch.zone/html/12341048/index.html"
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}