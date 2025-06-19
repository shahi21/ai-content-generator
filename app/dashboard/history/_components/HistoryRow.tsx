// app/dashboard/history/HistoryRow.tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
  id: string;
  aiResponse: string;
  createdAt: string;
  templateIcon: string;
  templateName: string;
}

export default function HistoryRow({
  id,
  aiResponse,
  createdAt,
  templateIcon,
  templateName,
}: Props) {
  return (
    <div
      key={id}
      className="grid grid-cols-7 my-5 py-3 px-3 border-b border-gray-200 items-center"
    >
      <h2 className="col-span-2 flex gap-2 items-center">
        <Image src={templateIcon} alt="Template Icon" width={25} height={25} />
        {templateName}
      </h2>

      <h2 className="col-span-2 line-clamp-3 text-sm text-gray-700">{aiResponse}</h2>
      <h2 className="text-sm">{createdAt}</h2>
      <h2 className="text-sm">{aiResponse.length}</h2>

      <h2>
        <Button
          variant="ghost"
          className="text-primary"
          onClick={() => navigator.clipboard.writeText(aiResponse)}
        >
          Copy
        </Button>
      </h2>
    </div>
  );
}
