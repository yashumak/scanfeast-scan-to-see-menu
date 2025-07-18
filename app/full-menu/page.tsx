"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { streetFoodData } from "@/lib/food-data"
import type { FoodItem } from "@/lib/food-data"
import ContactInfo from "@/components/contact-info"

export default function FullMenuPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Combine all food items into a single array
  const allItems = [
    ...streetFoodData.chaat,
    ...streetFoodData.rolls,
    ...streetFoodData.curries,
    ...streetFoodData.sweets,
    ...streetFoodData.beverages,
  ]

  // Filter items based on search query
  const filteredItems = allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Our Complete Menu</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Browse our full selection of authentic Indian street food
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <Input
            type="search"
            placeholder="Search by name, description, or region..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        {searchQuery ? (
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Search Results ({filteredItems.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map((item) => (
                <FoodItemCard key={item.id} item={item} />
              ))}
            </div>
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No items found matching your search.</p>
                <Button variant="link" onClick={() => setSearchQuery("")} className="mt-2">
                  Clear search
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8 overflow-x-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="chaat">Chaat</TabsTrigger>
              <TabsTrigger value="rolls">Rolls</TabsTrigger>
              <TabsTrigger value="curries">Curries</TabsTrigger>
              <TabsTrigger value="sweets">Sweets</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {allItems.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chaat">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {streetFoodData.chaat.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rolls">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {streetFoodData.rolls.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="curries">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {streetFoodData.curries.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sweets">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {streetFoodData.sweets.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beverages">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {streetFoodData.beverages.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>

      <div className="bg-muted py-8 md:py-12 mt-12 md:mt-16">
        <div className="container max-w-5xl mx-auto px-4">
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

function FoodItemCard({ item }: { item: FoodItem }) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg?height=400&width=600&text=" + encodeURIComponent(item.name)}
          alt={item.name}
          fill
          loading="eager"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.isSpicy && (
          <Badge variant="outline" className="absolute top-2 left-2 bg-white/80 text-red-500 border-red-200">
            Spicy
          </Badge>
        )}
      </div>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-base sm:text-lg">{item.name}</h3>
          <span className="font-bold text-primary">₹{item.price}</span>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2">{item.description}</p>
        <div className="mt-auto flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {item.region}
          </Badge>
          <Badge variant="outline" className="text-xs capitalize">
            {item.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
