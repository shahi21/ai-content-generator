import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50  bg-gradient-to-br from-blue-500 via-blue-100 to-blue-300 px-4 text-white">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        AI Content Generator App 📑
      </h2>
      
      <Link href="/dashboard">
        <Button className="px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
          Generate Content
        </Button>
      </Link>
    </div>
  );
}
