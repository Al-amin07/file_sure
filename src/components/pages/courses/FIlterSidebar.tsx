import React from "react";

interface FilterSidebarProps {
  categories: string[];
  levels: string[];
  selectedCategory: string;
  selectedLevel: string;
  searchQuery: string;
  sortBy: string;
  onCategoryChange: (v: string) => void;
  onLevelChange: (v: string) => void;
  onSearchChange: (v: string) => void;
  onSortChange: (v: "price-low" | "price-high" | "rating" | "students") => void;
  onReset: () => void;
}

export default function FilterSidebar({
  categories,
  levels,
  selectedCategory,
  selectedLevel,
  searchQuery,
  sortBy,
  onCategoryChange,
  onLevelChange,
  onSearchChange,
  onSortChange,
  onReset,
}: FilterSidebarProps) {
  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Search</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search courses..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Level */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Level</label>
          <select
            value={selectedLevel}
            onChange={(e) => onLevelChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {levels.map((lvl) => (
              <option key={lvl}>{lvl}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) =>
              onSortChange(
                e.target.value as
                  | "price-low"
                  | "price-high"
                  | "rating"
                  | "students"
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="rating">Top Rated</option>
            <option value="students">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Reset */}
        <button
          onClick={onReset}
          className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
}
