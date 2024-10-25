import { IoLogoApple, IoMdMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="text-white flex p-4 w-5/6 mx-auto justify-between items-center">
      {/* logo */}
      <div className="flex items-center gap-2">
        <IoLogoApple size={30} />
        <h1 className="text-2xl font-bold">WhiteSpace</h1>
      </div>

      <div className="lg:flex gap-10 items-center hidden">
        {/* link */}
        <ul className="flex gap-10 items-center">
          <li>Product</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>

        <div className="flex gap-10 items-center">
          <button className="bg-[#FFE492] text-primary px-4 py-2 rounded-lg">
            Login
          </button>
          <button className="bg-[#4F9CF9] px-4 py-2 rounded-lg">
            Try WhiteSpace free
          </button>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden">
        <IoMdMenu size={30} />
      </div>
    </div>
  );
}
