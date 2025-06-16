import MainContent from "./MainContent";
import RightContent from "./RightContent";
export default function Content() {
  return (
    <div className="absolute bg-[#FFFFFF] rounded-[30px] flex gap-6 p-6 w-[1060px] h-[860px] shadow-lg top-5 left-96 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 bg-gray-50 rounded-[20px] p-4">
        <MainContent />
      </div>

      {/* Right Content */}
      <div className="w-[300px] bg-gray-100 rounded-[20px] p-4">
        <RightContent />
      </div>
    </div>
  );
}
