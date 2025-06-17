import MainContent from "./MainContent";
import RightContent from "./RightContent";

export default function Content() {
  return (
    <div className="bg-white rounded-[30px] flex gap-6 p-6 w-[1060px] h-[860px] shadow-lg overflow-hidden">
      {/* Main Content */}
      <div className="w-[510px] bg-gray-50 rounded-[20px] p-4">
        <MainContent />
      </div>

      {/* Right Content */}
      <div className="w-[350px] bg-[#F9FAFC] rounded-[20px] p-4">
        <RightContent />
      </div>
    </div>
  );
}
