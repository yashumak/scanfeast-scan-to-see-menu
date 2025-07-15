import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { FoodItem } from "@/lib/food-data"
import RatingStars from "@/components/rating-stars"

export default function FoodItemCard({ item }: { item: FoodItem }) {
  return (
    <Link href={`/item/${item.id}`}>
      <Card className="overflow-hidden flex border-secondary/20 hover:border-secondary/40 transition-colors">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0">
          <Image
            src={item.image || "/placeholder.svg?height=200&width=200&text=" + encodeURIComponent(item.name)}
            alt={item.name}
            fill
            className="object-cover"
          />
          {item.isVegetarian ? (
            <div className="absolute bottom-1 left-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          ) : (
            <div className="absolute bottom-1 left-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          )}
        </div>
        <CardContent className="p-2 sm:p-3 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm sm:text-base text-slate-800">{item.name}</h3>
            <span className="font-bold text-primary text-xs sm:text-sm">₹{item.price}</span>
          </div>
          <p className="text-xs text-slate-500 line-clamp-2 mb-1">{item.description}</p>
          <div className="flex items-center justify-between">
            <RatingStars rating={item.rating} size="sm" />
            {item.isSpicy && (
              <Badge
                variant="outline"
                className="text-[10px] h-4 sm:h-5 bg-accent/10 border-accent/20 text-accent-foreground"
              >
                Spicy
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
