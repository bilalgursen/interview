import Link from "next/link";
import Getlottie from "./components/lottie";
import cube from "@/public/cube.json";

export default function page() {
  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center">
      <Getlottie data={cube} />
      <div className="flex flex-col items-start gap-2">
        <Link href={"/todo"} className="main-link">
          To Do App
        </Link>
        <Link href={"/countries"} className="main-link flex gap-2">
          Country{" "}
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-[0.6rem] font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Badge
          </span>{" "}
        </Link>
      </div>
    </div>
  );
}
