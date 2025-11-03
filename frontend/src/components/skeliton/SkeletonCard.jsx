// components/home/SkeletonCard.jsx
// import Skeleton from "../ui/Skeleton";
import Skeleton from "./Skeleton";

const SkeletonCard = () => {
  return (
    <div className="rounded-lg shadow-md border-2 border-gray-200 p-2">
      <Skeleton className="w-full h-40 mb-4 rounded-lg" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-8 w-16 mt-3 rounded-full" />
    </div>
  );
};

export default SkeletonCard;
