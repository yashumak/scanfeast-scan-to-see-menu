// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Star } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/components/ui/use-toast"

// interface UserReviewFormProps {
//   itemId: string
//   itemName: string
// }

// export default function UserReviewForm({ itemId, itemName }: UserReviewFormProps) {
//   const [rating, setRating] = useState(0)
//   const [hoverRating, setHoverRating] = useState(0)
//   const [comment, setComment] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     if (rating === 0) {
//       toast({
//         title: "Rating required",
//         description: "Please select a rating before submitting",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       toast({
//         title: "Review submitted!",
//         description: `Thank you for rating ${itemName}`,
//       })

//       // Reset form
//       setRating(0)
//       setComment("")
//       setIsSubmitting(false)
//     }, 1000)
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="flex flex-col items-center">
//         <div className="flex gap-1 mb-2">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <button
//               key={star}
//               type="button"
//               onClick={() => setRating(star)}
//               onMouseEnter={() => setHoverRating(star)}
//               onMouseLeave={() => setHoverRating(0)}
//               className="focus:outline-none"
//             >
//               <Star
//                 className={`h-8 w-8 ${
//                   (hoverRating || rating) >= star ? "text-yellow-400 fill-yellow-400" : "text-slate-300"
//                 }`}
//               />
//             </button>
//           ))}
//         </div>
//         <p className="text-sm text-slate-500">
//           {rating > 0 ? `You rated this ${rating} star${rating > 1 ? "s" : ""}` : "Tap to rate"}
//         </p>
//       </div>

//       <Textarea
//         placeholder="Share your thoughts about this dish..."
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         className="border-orange-200 focus-visible:ring-orange-500"
//       />

//       <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
//         {isSubmitting ? "Submitting..." : "Submit Review"}
//       </Button>
//     </form>
//   )
// }
