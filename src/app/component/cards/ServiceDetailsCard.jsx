

import Link from "next/link";
import {
  BadgeDollarSign,
  Clock,
  MapPin,
  Star,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ServiceDetailsCard({ service }) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      
      <div className="grid md:grid-cols-2 gap-8 p-8">
        
        {/* Left: Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={service?.image}
            alt={service.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right: Details */}
        <div className="space-y-6">
          
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {service.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <span className="text-gray-700 font-medium">
                {service.rating || "4.8"} Rating
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {service.description}
          </p>

          {/* Info Section */}
          <div className="space-y-3">

            <div className="flex items-center gap-2 text-emerald-600 font-semibold">
              <BadgeDollarSign size={18} />
              ৳ {service.price} per hour
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={18} />
              Flexible hourly & daily booking
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              Available across selected locations
            </div>

            <div className="flex items-center gap-2 text-green-600">
              <ShieldCheck size={18} />
              Verified & Trusted Caretakers
            </div>
          </div>

          {/* Features List */}
          <div className="pt-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              Service Includes:
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-500" />
                Professional & trained caregiver
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-500" />
                On-time arrival
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-500" />
                Safe and hygienic care
              </li>
            </ul>
          </div>

          {/* Book Button */}
          <Link
            href={`/booking/${service.id}`}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-emerald-500 text-white font-medium rounded-xl hover:bg-emerald-600 transition shadow-md"
          >
            Book Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
