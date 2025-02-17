import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100vh] flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:[14%] p-4 h-[100vh] overflow-scroll no-scrollbar">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.svg" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold uppercase">SchoolMS</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className="w-[84%] h-screen md:[92%] lg:w-[84%] xl:[86%] bg-[#F7F8FA] overflow-scroll no-scrollbar flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
