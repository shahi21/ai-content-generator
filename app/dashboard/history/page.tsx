
// app/dashboard/history/page.tsx

import Templates from "@/app/(data)/Templates";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { TEMPLATE } from "../_components/TemplateListSection";
import HistoryRow from "./_components/HistoryRow";

export interface HISTORY {
  id: string;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

export default async function History() {
  const user = await currentUser();

  const historyList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | undefined = Templates.find(
      (item) => item.slug === slug
    );
    return template || { name: "Unknown", icon: "/default.svg" };
  };

  return (
    <div className="p-6">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500 mb-4">
        Search your previously generated AI content
      </p>

      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3 rounded">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {historyList.map((item) => {
        const template = GetTemplateName(item.templateSlug);

        return (
          <HistoryRow
            key={item.id}
            id={item.id}
            aiResponse={item.aiResponse}
            createdAt={item.createdAt}
            templateIcon={template.icon}
            templateName={template.name}
          />
        );
      })}
    </div>
  );
}







// "use client"
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { currentUser } from "@clerk/nextjs/server";
// import { desc, eq } from "drizzle-orm";
// import React from "react";
// import moment from "moment";
// import { Button } from "@/components/ui/button";

// export interface HISTORY {
//   id: number;
//   formData: string;
//   aiResponse: string | null;
//   templateSlug: string;
//   createdBy: string | null;
//   createdAt: string | null;
// }

// async function HistoryPage() {
//   const user = await currentUser();
//   if (!user) return <div className="p-8">Please log in to view history.</div>;

//   const history: HISTORY[] = await db
//     .select()
//     .from(AIOutput)
//     .where(eq(AIOutput.createdBy, user?.emailAddresses[0].emailAddress))
//     .orderBy(desc(AIOutput.createdAt));

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-2">History</h1>
//       <p className="text-sm text-gray-500 mb-6">
//         Search your previously generated AI content
//       </p>

//       <div className="grid grid-cols-7 gap-4 font-semibold text-gray-700 border-b pb-3">
//         <div className="col-span-1">Template</div>
//         <div className="col-span-3">AI Resp</div>
//         <div className="col-span-1">Date</div>
//         <div className="col-span-1">Words</div>
//         <div className="col-span-1">Copy</div>
//       </div>

//       <div className="mt-4 space-y-4">
//         {history.map((record) => (
//           <div
//             key={record.id}
//             className="grid grid-cols-7 gap-4 border-b py-2 text-sm items-start"
//           >
//             <div className="col-span-1 text-blue-600 font-medium">
//               {record.templateSlug}
//             </div>
//             <div className="col-span-3 whitespace-pre-wrap text-gray-700">
//               {record.aiResponse?.slice(0, 100)}...
//             </div>
//             <div className="col-span-1">
//               {record.createdAt
//                 ? moment(record.createdAt, "DD/MM/YYYY").format("DD MMM YYYY")
//                 : "N/A"}
//             </div>

//             <div className="col-span-1">
//               {record.aiResponse?.split(" ").length}
//             </div>
//             <div>
//               <Button
//                 variant={"ghost"}
//                 className="text-primary"
//                 onClick={() => navigator.clipboard.writeText(record.aiResponse || '')}
//               >
//                 Copy
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HistoryPage;


// import Templates from "@/app/(data)/Templates";
// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";

// import { desc,eq } from "drizzle-orm";
// import Image from "next/image";
// import React from "react";
// import {TEMPLATE} from '../_components/TemplateListSection'
// import { currentUser } from "@clerk/nextjs/server";
// interface HISTORY {
//   id: string;
//   formData: string;
//   aiResponse: string;
//   templateSlug: string;
//   createdBy: string;
//   createdAt: string;
// }

//  async function History() {
//   const user = await currentUser();

//   { /* @ts-ignore */}
//   const historyList: HISTORY[] = await db
//     .select()
//     .from(AIOutput)
//     .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
//   const GetTemplateName= (slug:string) =>{
//     const template: TEMPLATE | any = Templates.find(
//       (item) => item.slug === slug
//     );
//     return template;
//   }
//   return (
//     <div className="p-6">
//       <h2 className="font-bold text-3xl">History</h2>
//       <p className="text-gray-500 mb-4">Search your previously generated AI content</p>

//       <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3 rounded">
//         <h2 className="col-span-2">TEMPLATE</h2>
//         <h2 className="col-span-2">AI RESP</h2>
//         <h2>DATE</h2>
//         <h2>WORDS</h2>
//         <h2>COPY</h2>
//       </div>

//       {historyList.map((item: HISTORY, index: number) => (
//         <div
//           key={item.id}
//           className="grid grid-cols-7 my-5 py-3 px-3 border-b border-gray-200 items-center"
//         >
//           <h2 className="col-span-2 flex gap-2 items-center">
//             <Image
//               src={GetTemplateName(item.templateSlug)?.icon}
//               alt="Template Icon"
//               width={25}
//               height={25}
//             />
//             {GetTemplateName(item.templateSlug)?.name}
//           </h2>

//           <h2 className="col-span-2 line-clamp-3 text-sm text-gray-700">
//             {item.aiResponse}
//           </h2>

//           <h2 className="text-sm">{item.createdAt}</h2>
//           <h2 className="text-sm">{item.aiResponse.length}</h2>

//           <h2>
//             <Button
//               variant="ghost"
//               className="text-primary"
//               onClick={() => navigator.clipboard.writeText(item.aiResponse)}
//             >
//               Copy
//             </Button>
//           </h2>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default History