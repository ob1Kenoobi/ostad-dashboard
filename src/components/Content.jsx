// components/Content.jsx
export default function Content() {
  return (
    <main className="flex-1 p-8 text-white rounded-r-[30px]">
      <h1 className="mb-4 text-2xl font-bold">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#181818] rounded-xl p-6">Widget 1</div>
        <div className="bg-[#181818] rounded-xl p-6">Widget 2</div>
        <div className="bg-[#181818] rounded-xl p-6">Widget 3</div>
      </div>
    </main>
  );
}
