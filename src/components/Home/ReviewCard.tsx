// src/components/Home/ReviewCard.tsx

import { cn } from '../../lib/utils';

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
  return (
    <figure
      className={cn(
        "relative w-full h-full cursor-pointer overflow-hidden rounded-2xl border p-6", // changed w-80 to w-full and added h-full
        "border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img className="size-12 rounded-full object-cover" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-base text-gray-300">{body}</blockquote>
    </figure>
  );
};

export default ReviewCard;