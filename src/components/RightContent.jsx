export default function RightContent() {
  return (
    <div className="w-[350px] h-[860px] bg-[#F9FAFC] rounded-[20px] p-6 flex flex-col gap-6">
      {/* Where your money go */}
      <div>
        <h2 className="text-lg font-semibold text-[#1D1E2C] mb-6">
          Where your money go?
        </h2>

        <div className="space-y-5">
          {[
            { label: "Food and Drinks", value: "872.400", percent: "60%" },
            { label: "Shopping", value: "1.378.200", percent: "80%" },
            { label: "Housing", value: "928.500", percent: "65%" },
            { label: "Transportation", value: "420.700", percent: "40%" },
            { label: "Vehicle", value: "520.000", percent: "50%" },
          ].map(({ label, value, percent }) => (
            <div key={label}>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded mt-1">
                <div
                  className="bg-green-400 h-1.5 rounded"
                  style={{ width: percent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tip Box */}
      <div className="flex flex-col items-center p-4 mt-24 text-center bg-white shadow-sm rounded-xl">
        <img
          src="public/banker-offering-loan.png"
          alt="Tips"
          className="w-32 h-32 mb-4"
        />
        <h3 className="text-base font-semibold text-[#1D1E2C]">
          Save more money
        </h3>
        <p className="mt-2 mb-4 text-sm text-gray-500">
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
        <button className="px-6 py-2 text-sm font-semibold text-white transition bg-black rounded-lg hover:bg-gray-800">
          VIEW TIPS
        </button>
      </div>
    </div>
  );
}
