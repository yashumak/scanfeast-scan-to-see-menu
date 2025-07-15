import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import type { MenuItemType } from "@/lib/menu-data"

interface MenuCategoryProps {
  items: MenuItemType[]
}

export default function MenuCategory({ items }: MenuCategoryProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={item.id}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                  <div className="flex gap-2 mt-2">
                    {item.tags?.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="font-semibold">${item.price.toFixed(2)}</div>
              </div>
              {index < items.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
