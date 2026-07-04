
interface AppointmentFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const tabs: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

export default function AppointmentFilters({
  activeFilter,
  onFilterChange,
}: AppointmentFiltersProps) {
  return (
    <div className="flex items-center gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onFilterChange(tab.value)}
          className={`h-8 px-4 rounded-full text-sm font-medium transition-colors cursor-pointer ${activeFilter === tab.value
              ? "bg-booking-filter-active-bg text-booking-filter-active-text"
              : "bg-transparent text-booking-text-secondary hover:bg-gray-100"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
