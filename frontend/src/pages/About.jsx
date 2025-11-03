// pages/Home.jsx
import { useEffect, useState } from "react";
// import SkeletonCard from "../components/home/SkeletonCard";
// import Skeleton from "../components/skeliton/Skeleton";
import SkeletonCard from '../components/skeliton/SkeletonCard'
// import Card from "../components/ui/Card"; // Your final card component
import Card from "../components/ui/card/Card";
// import { housesData } from "../utils/Afg_Province_Config";
import { housesData } from "../utils/Afg_Province_Config";
import ImageContainer from "../components/image/ImageContainer";

const About = () => {
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000); // simulate API delay
//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div dir="rtl" className="p-4 shadow w-full mt-3 sm:w-4/5 mx-auto lg:w-full">
      <h1 className="md:text-2xl text-xl font-bold text-gray-800">
        تمام خانه های موجود: همه
      </h1>

      <div className="grid mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, idx) => <SkeletonCard key={idx} />)
          : ''}
      </div>
    </div>
  );
};

export default About;
