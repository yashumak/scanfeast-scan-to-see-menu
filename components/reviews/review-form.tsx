"use client";

import { useState } from "react";

export default function ReviewForm({ itemId, onSubmitted }: { itemId: string; onSubmitted?: () => void }) {
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        try {
            const res = await fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ itemId, userName, rating, comment }),
            });
            if (!res.ok) {
                const body = await res.json().catch(() => ({}));
                throw new Error(body?.error ? JSON.stringify(body.error) : "Failed to submit review");
            }
            setUserName("");
            setRating(5);
            setComment("");
            onSubmitted?.();
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={submit} className="space-y-3">
            <input
                className="w-full border rounded px-3 py-2"
                placeholder="Your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
            />
            <select
                className="w-full border rounded px-3 py-2"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
            >
                {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>{r} stars</option>
                ))}
            </select>
            <textarea
                className="w-full border rounded px-3 py-2"
                placeholder="Write your review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                required
            />
            {error ? <p className="text-red-600 text-sm">{error}</p> : null}
            <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-white rounded px-4 py-2 disabled:opacity-50"
            >
                {submitting ? "Submitting..." : "Submit Review"}
            </button>
        </form>
    );
}