import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema(
    {
        itemId: { type: String, required: true, index: true },
        userName: { type: String, required: true, trim: true, maxlength: 80 },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, required: true, maxlength: 1000 },
    },
    { timestamps: true }
);

export type ReviewDoc = {
    _id: string;
    itemId: string;
    userName: string;
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
};

export const Review = models.Review || model("Review", ReviewSchema);