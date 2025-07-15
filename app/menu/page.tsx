"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { streetFoodData } from "@/lib/food-data"
import FoodItemCard from "@/components/food-item-card"
import ContactInfo from "@/components/contact-info"

export default function MenuPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    // Get category from URL if present
    const category = searchParams.get("category")
    if (category && ["all", "chaat", "rolls", "curries", "sweets", "beverages"].includes(category)) {
      setActiveTab(category)
    }

    // Set a flag in sessionStorage to indicate the user has accessed the menu
    sessionStorage.setItem("menuAccessed", "true")
  }, [searchParams])

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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-12">
      <div className="sticky top-0 z-10 bg-white border-b border-primary/20 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-3xl">
          <Button variant="ghost" size="icon" asChild className="text-primary">
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-lg md:text-xl font-bold text-primary">Street Food Menu</h1>
          <div className="w-9"></div> {/* Spacer for alignment */}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-4 max-w-3xl">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 border-secondary/20 focus-visible:ring-secondary"
          />
        </div>

        {searchQuery ? (
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4 text-slate-700">Search Results ({filteredItems.length})</h2>
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <FoodItemCard key={item.id} item={item} />
              ))}
            </div>
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500">No items found matching your search.</p>
                <Button variant="link" onClick={() => setSearchQuery("")} className="mt-2 text-primary">
                  Clear search
                </Button>
              </div>
            )}
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-6 bg-secondary/10 overflow-x-auto">
              <TabsTrigger value="all" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="chaat" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                Chaat
              </TabsTrigger>
              <TabsTrigger value="rolls" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                Rolls
              </TabsTrigger>
              <TabsTrigger value="curries" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                Curries
              </TabsTrigger>
              <TabsTrigger value="sweets" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                Sweets
              </TabsTrigger>
              <TabsTrigger
                value="beverages"
                className="data-[state=active]:bg-secondary data-[state=active]:text-white"
              >
                Drinks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-4">
                {allItems.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="chaat">
              <div className="space-y-4">
                {streetFoodData.chaat.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rolls">
              <div className="space-y-4">
                {streetFoodData.rolls.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="curries">
              <div className="space-y-4">
                {streetFoodData.curries.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sweets">
              <div className="space-y-4">
                {streetFoodData.sweets.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beverages">
              <div className="space-y-4">
                {streetFoodData.beverages.map((item) => (
                  <FoodItemCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-3xl">
        <Separator className="mb-8 bg-primary/20" />
        <ContactInfo />
      </div>
    </div>
  )
}
