import Image from "next/image";

const UserCard = ({ type }: { type: String }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow flex-1 p-4 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 text-green-400 rounded-full">
          2025/01
        </span>
        <Image src={"/more.png"} alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">6450</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
