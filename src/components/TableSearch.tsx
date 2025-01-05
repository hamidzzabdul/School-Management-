import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex text-xs items-center gap-2 ring-[1.5px] ring-gray-300 rounded-full px-2">
      <Image src={"/search.png"} alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent outline-none py-2"
      />
    </div>
  );
};

export default TableSearch;
