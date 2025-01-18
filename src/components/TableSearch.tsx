"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TableSearch = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;

    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-auto flex text-xs items-center gap-2 ring-[1.5px] ring-gray-300 rounded-full px-2"
    >
      <Image src={"/search.png"} alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent outline-none py-2"
      />
    </form>
  );
};

export default TableSearch;
