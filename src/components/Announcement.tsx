import Image from "next/image";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Announcement</h1>
        <span className="text-xs text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="bg-lamaSkyLight rounded-md p-3">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-sm">Lorem ipsum dolor asit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025/01/20
            </span>
          </div>
          <p className="text-xs text-gray-600 pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            voluptatum nam voluptas?
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-3">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-sm">Lorem ipsum dolor asit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025/01/20
            </span>
          </div>
          <p className="text-xs text-gray-600 pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            voluptatum nam voluptas?
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-3">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-sm">Lorem ipsum dolor asit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025/01/20
            </span>
          </div>
          <p className="text-xs text-gray-600 pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            voluptatum nam voluptas?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
