import Link from "next/link";
import Getlottie from "./components/lottie";
import cube from "@/public/cube.json";

export default function page() {
  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center">
      <Getlottie data={cube} />
      <Link href={"/todo"} className="main-link">
        Country ?{" "}
      </Link>
      <Link href={"/todo"} className="main-link">
        To Do App
      </Link>
    </div>
  );
}
