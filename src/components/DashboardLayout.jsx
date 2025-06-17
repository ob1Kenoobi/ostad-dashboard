import Sidebar from "./Sidebar";
import Content from "./Content";

export default function DashboardLayout() {
  return (
    <div className="relative w-[1440px] h-[900px] bg-[#101010] rounded-[30px] overflow-hidden">
      <Sidebar />
      <div className="relative top-[25px] left-[350px] w-[1060px] h-[860px] bg-[#FFFFFF] rounded-[30px] flex gap-6 p-6 shadow-lg overflow-hidden">
        <Content />
      </div>
    </div>
  );
}
