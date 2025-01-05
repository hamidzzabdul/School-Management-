import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-white z-10">
      {/* SEARCH BAR */}
      <div className="hidden md:flex text-xs items-center gap-2 ring-[1.5px] ring-gray-300 rounded-full px-2">
        <Image src={"/search.png"} alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent outline-none py-2"
        />
      </div>
      {/* ICONS & USER  */}
      <div className=" flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src={"/announcement.png"} alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 text-white bg-purple-500 rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">JohnDoe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src={"/avatar.png"}
          alt=""
          width={36}
          height={36}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
