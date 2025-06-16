import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="relative w-[1440px] h-[900px] bg-[#101010] rounded-[30px] overflow-hidden">
      <Sidebar />
      {/* Place your Content component here */}
    </div>
  );
}
