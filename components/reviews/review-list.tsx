"use client";

import { useEffect, useState } from "react";

type Review = {
    _id: string;
    userName: string;
    rating: number;
    comment: string;
    createdAt: string;
};

export default function ReviewList({ itemId }: { itemId: string }) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    async function load() {
        setLoading(true);
        const res = await fetch(`/api/reviews?itemId=${encodeURIComponent(itemId)}`);
        const data = await res.json();
        setReviews(data.data || []);
        setLoading(false);
    }

    useEffect(() => {
        load();
    }, [itemId]);

    if (loading) return <p className="text-sm text-slate-500">Loading reviews...</p>;
    if (!reviews.length) return <p className="text-sm text-slate-500">No reviews yet.</p>;

    return (
        <div className="space-y-3">
            {reviews.map((r) => (
                <div key={r._id} className="border rounded p-3">
                    <div className="flex items-center justify-between">
                        <p className="font-medium">{r.userName}</p>
                        <p className="text-yellow-600">{Array.from({ length: r.rating }).map((_, i) => "★").join("")}</p>
                    </div>
                    <p className="text-sm text-slate-700 mt-1">{r.comment}</p>
                    <p className="text-xs text-slate-400 mt-1">{new Date(r.createdAt).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}