export default function Sidebar() {
  return (
    <aside className="absolute top-[65px] left-[80px] w-[197px] h-[651px] bg-[#101010] text-white rounded-[30px] p-6 flex flex-col gap-6">
      {/* Profile Section */}
      <div className="relative w-14 h-14">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Samantha"
          className="object-cover w-full h-full rounded-md "
        />
        <span
          className="absolute z-10 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-600 rounded-full -top-3 -right-2"
          aria-label="4 new notifications"
        >
          4
        </span>
      </div>

      {/* User Info */}
      <div className="mb-8 leading-tight">
        <h2 className="text-3xl font-semibold leading-9 tracking-normal font-poppins ">
          Samantha
        </h2>
        <p className="text-lg font-normal leading-7 tracking-normal font-poppins">
          samantha@email.com
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-10 mt-16">
        <SidebarLink text="Dashboard" />
        <SidebarLink text="Expenses" active />
        <SidebarLink text="Wallets" />
        <SidebarLink text="Summary" />
        <SidebarLink text="Accounts" />
        <SidebarLink text="Settings" />
      </nav>
    </aside>
  );
}

function SidebarLink({ text, active }) {
  return (
    <span
      className={`font-poppins font-bold text-[25px] leading-[35px] tracking-normal cursor-pointer transition-colors ${
        active ? "text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {text}
    </span>
  );
}
