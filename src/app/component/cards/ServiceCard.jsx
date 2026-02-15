import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
      
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">
          {service.name}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2">
          {service.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-emerald-600 font-bold text-lg">
            ৳ {service.price} / hour
          </span>

          <Link
            href={`/service/${service.id}`}
            className="px-4 py-2 bg-emerald-500 text-white text-sm rounded-lg hover:bg-emerald-600 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
