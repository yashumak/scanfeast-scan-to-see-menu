"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { streetFoodData } from "@/lib/food-data"
import RatingStars from "@/components/rating-stars"

export default function ItemDetailPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [liked, setLiked] = useState(false)
  const [params, setParams] = useState<{ id: string } | null>(null)

  useEffect(() => {
    paramsPromise.then(setParams)
  }, [paramsPromise])

  if (!params) {
    return <div>Loading...</div>
  }

  // Function to get appropriate food image based on category and item
  const getFoodImage = (foodItem: any) => {
    if (!foodItem) return "/placeholder.svg";
    // Use the image property from the foodItem data if available
    return foodItem.image || `/placeholder.svg?text=${encodeURIComponent(foodItem.name || "Food")}`;
  };

  // Find the item from all categories
  const allItems = [
    ...streetFoodData.chaat,
    ...streetFoodData.rolls,
    ...streetFoodData.curries,
    ...streetFoodData.sweets,
    ...streetFoodData.beverages,
  ]

  const item = allItems.find((item) => item.id === params.id)

  if (!item) {
    return (
      <div className="container max-w-md mx-auto px-4 py-12 text-center">
        <p className="text-slate-600 mb-4">Item not found</p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/menu">Back to Menu</Link>
        </Button>
      </div>
    )
  }

  const foodImage = getFoodImage(item)

  // Get related items from the same category
  const relatedItems = allItems
    .filter((relatedItem) => relatedItem.category === item.category && relatedItem.id !== item.id)
    .slice(0, 3)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${item.name} - Street Food Delights`,
        text: `Check out ${item.name} at Street Food Delights!`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-12">
      <div className="sticky top-0 z-10 bg-white border-b border-primary/20 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-3xl">
          <Button variant="ghost" size="icon" asChild className="text-primary">
            <Link href="/menu">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-lg font-medium text-primary truncate max-w-[150px] sm:max-w-[200px] md:max-w-[300px]">
            {item.name}
          </h1>
          <Button variant="ghost" size="icon" onClick={handleShare} className="text-primary">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-4 max-w-3xl">
        <div className="relative h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-4">
          <Image src={foodImage || "/placeholder.svg"} alt={item.name} fill loading="eager" className="object-cover" />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 bg-white/80 backdrop-blur-sm ${liked ? "text-red-500" : "text-slate-600"
              }`}
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{item.name}</h2>
            <p className="text-slate-500">{item.region}</p>
          </div>
          <div className="text-xl font-bold text-primary">₹{item.price}</div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <RatingStars rating={item.rating} />
          <span className="text-sm text-slate-500">({item.numRatings} ratings)</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {item.isVegetarian && (
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">Vegetarian</Badge>
          )}
          {!item.isVegetarian && (
            <Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200">Non-Vegetarian</Badge>
          )}
          {item.isSpicy && (
            <Badge className="bg-accent/10 text-accent-foreground hover:bg-accent/20 border-accent/20">Spicy</Badge>
          )}
          <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </Badge>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-slate-800 mb-2">Description</h3>
          <p className="text-slate-600">{item.description}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-slate-800 mb-2">Ingredients</h3>
          <p className="text-slate-600">{item.ingredients}</p>
        </div>

        <Separator className="my-6 bg-primary/20" />

        {relatedItems.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">You might also like</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {relatedItems.map((relatedItem) => (
                  <Link key={relatedItem.id} href={`/item/${relatedItem.id}`}>
                    <Card className="overflow-hidden h-full border-secondary/20 hover:border-secondary/40 transition-colors">
                      <div className="relative h-24 sm:h-32">
                        <Image
                          src={getFoodImage(relatedItem) || "/placeholder.svg"}
                          alt={relatedItem.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-2 sm:p-3">
                        <p className="text-xs sm:text-sm font-medium line-clamp-2">{relatedItem.name}</p>
                        <p className="text-xs text-primary">₹{relatedItem.price}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
