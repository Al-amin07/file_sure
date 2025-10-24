"use client";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: any;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function DashboardSidebar({
  activeTab,
  setActiveTab,
  user,
  onNavigate,
  onLogout,
  isOpen,
  setIsOpen,
}: DashboardSidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "referral", label: "Referrals", icon: "🔗" },
    { id: "purchase", label: "Purchase Credits", icon: "💳" },
    { id: "history", label: "Transaction History", icon: "📜" },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen w-64 bg-gradient-to-b from-indigo-600 to-indigo-700 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:z-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close Button (Mobile) */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden absolute top-4 right-4 text-white hover:bg-indigo-500 p-2 rounded-lg transition"
        >
          ✕
        </button>

        {/* Sidebar Header */}
        <div className="p-6 border-b border-indigo-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">💳</div>
            <h2 className="text-xl font-bold">CreditHub</h2>
          </div>
          <div className="bg-indigo-500 rounded-lg p-3">
            <p className="text-xs text-indigo-100 mb-1">Your Credits</p>
            <p className="text-2xl font-bold">{user?.credits}</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200 ${
                    activeTab === item.id
                      ? "bg-white text-indigo-600 font-semibold"
                      : "text-indigo-100 hover:bg-indigo-500"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-indigo-500 space-y-2">
          <button
            onClick={() => {
              onNavigate("home");
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-indigo-100 hover:bg-indigo-500 transition duration-200"
          >
            <span className="text-xl">🏠</span>
            <span>Back to Shop</span>
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-200 hover:bg-red-600 transition duration-200"
          >
            <span className="text-xl">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
