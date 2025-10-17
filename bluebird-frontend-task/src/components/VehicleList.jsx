import VehicleCard from "./VehicleCard";

export default function VehicleList({ vehicles = [] }) {
  if (!vehicles.length) {
    return <p className="text-center text-gray-500">No vehicles available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((v) => (
        <VehicleCard key={v.vehicle} vehicle={v} />
      ))}
    </div>
  );
}
