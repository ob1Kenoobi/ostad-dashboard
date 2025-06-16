import Sidebar from "./Sidebar";
import Content from "./Content";

export default function DashboardLayout() {
  return (
    <div className="relative w-[1440px] h-[900px] bg-[#101010] rounded-[30px] overflow-hidden">
      <Sidebar />
      {/* Place your Content component here */}
      <Content />
      {/* You can add more components like Header, Footer, etc. */}
    </div>
  );
}
