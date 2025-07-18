import type { FoodItem } from "@/lib/food-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Utensils, Flame } from "lucide-react"

interface FoodCategorySectionProps {
  title: string
  description: string
  items: FoodItem[]
  colorAccent: string
}

export default function FoodCategorySection({ title, description, items, colorAccent }: FoodCategorySectionProps) {
  return (
    <section id="menu" className="scroll-mt-16">
      <div className="mb-8">
        <div className={`h-1 w-24 bg-gradient-to-r ${colorAccent} rounded-full mb-4`} />
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <FoodItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

function FoodItemCard({ item }: { item: FoodItem }) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg?height=400&width=600"}
          alt={item.name}
          fill
          loading="eager"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.isSpicy && (
          <div className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded-full">
            <Flame className="h-4 w-4" />
          </div>
        )}
      </div>
      <CardContent className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <span className="font-bold text-primary">₹{item.price}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
        <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
          <Utensils className="h-3 w-3" />
          <span>{item.region}</span>
        </div>
      </CardContent>
    </Card>
  )
}
