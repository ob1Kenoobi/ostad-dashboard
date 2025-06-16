export default function MainContent() {
  return (
    <div className="bg-white rounded-[20px] p-6 w-[510px] h-[741px] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-[28px] font-poppins font-bold text-[#101010]">
            Expenses
          </h1>
          <p className="text-sm text-gray-500">01 – 25 March, 2020</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Avatars */}
          {[
            "https://i.pravatar.cc/24?img=1",
            "https://i.pravatar.cc/24?img=2",
            "https://i.pravatar.cc/24?img=3",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              className="w-6 h-6 -ml-2 border-2 border-white rounded-full"
              alt="avatar"
            />
          ))}
          {/* Add Button */}
          <button className="w-6 h-6 flex items-center justify-center text-white bg-[#4D6FFF] rounded-full text-xs font-bold">
            +
          </button>
        </div>
      </div>

      {/* Bar Chart Placeholder */}
      <div className="h-24 flex items-end gap-[4px] my-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 rounded bg-blue-200 ${
              i === 15 ? "h-[60%] bg-blue-500" : `h-[${20 + (i % 4) * 10}%]`
            }`}
          />
        ))}
      </div>

      {/* Expenses List */}
      <ExpenseSection
        title="Today"
        items={[
          {
            icon: <FaShoppingCart />,
            label: "Grocery",
            time: "5:12 pm",
            subtitle: "Belanja di pasar",
            amount: "-326.800",
            color: "bg-sky-500",
          },
          {
            icon: <FaBus />,
            label: "Transportation",
            time: "5:12 pm",
            subtitle: "Naik bus umum",
            amount: "-15.000",
            color: "bg-purple-500",
          },
          {
            icon: <FaHome />,
            label: "Housing",
            time: "5:12 pm",
            subtitle: "Bayar Listrik",
            amount: "-185.750",
            color: "bg-orange-500",
          },
        ]}
      />

      <ExpenseSection
        title="Monday, 23 March 2020"
        items={[
          {
            icon: <FaUtensils />,
            label: "Food and Drink",
            time: "5:12 pm",
            subtitle: "Makan Steak",
            amount: "-156.000",
            color: "bg-red-500",
          },
          {
            icon: <FaFilm />,
            label: "Entertainment",
            time: "5:12 pm",
            subtitle: "Nonton Bioskop",
            amount: "-35.200",
            color: "bg-green-500",
          },
        ]}
      />
    </div>
  );
}

// Expense Group Section
import {
  FaShoppingCart,
  FaBus,
  FaHome,
  FaUtensils,
  FaFilm,
} from "react-icons/fa";

function ExpenseSection({ title, items }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[16px] font-semibold text-[#101010]">{title}</h2>
        <span className="text-xl text-gray-400">•••</span>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div className="flex items-center justify-between" key={i}>
            {/* Icon + Info */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 flex items-center justify-center text-white text-xl rounded-full ${item.color}`}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#101010]">
                  {item.label}
                </p>
                <p className="text-xs text-gray-400">
                  {item.time} • {item.subtitle}
                </p>
              </div>
            </div>
            {/* Amount */}
            <p className="text-sm font-bold text-[#101010]">{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
