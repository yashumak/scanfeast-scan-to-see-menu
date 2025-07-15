import { Star, StarHalf } from "lucide-react"

interface RatingStarsProps {
  rating: number
  size?: "sm" | "md" | "lg"
}

export default function RatingStars({ rating, size = "md" }: RatingStarsProps) {
  // Calculate full stars, half stars, and empty stars
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  // Set star size based on the size prop
  const starSizeClass = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }[size]

  return (
    <div className="flex">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className={`${starSizeClass} text-yellow-400 fill-yellow-400`} />
      ))}

      {/* Half star */}
      {hasHalfStar && <StarHalf className={`${starSizeClass} text-yellow-400 fill-yellow-400`} />}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className={`${starSizeClass} text-slate-300`} />
      ))}
    </div>
  )
}
