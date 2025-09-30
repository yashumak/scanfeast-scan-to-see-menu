import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
    {
        orderId: { type: String, required: true, unique: true },
        itemId: { type: String, required: true },
        itemName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, default: 1 },
        customerName: { type: String, required: true, trim: true, maxlength: 100 },
        phoneNumber: { type: String, required: true, trim: true, maxlength: 15 },
        address: { type: String, required: true, trim: true, maxlength: 500 },
        deliveryTime: { type: String, required: true },
        paymentStatus: { 
            type: String, 
            enum: ['pending', 'completed', 'failed', 'refunded'], 
            default: 'pending' 
        },
        paymentId: { type: String },
        razorpayOrderId: { type: String },
        orderStatus: { 
            type: String, 
            enum: ['pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'], 
            default: 'pending' 
        },
        otpVerified: { type: Boolean, default: false },
        notes: { type: String, maxlength: 300 },
    },
    { timestamps: true }
);

export type OrderDoc = {
    _id: string;
    orderId: string;
    itemId: string;
    itemName: string;
    price: number;
    quantity: number;
    customerName: string;
    phoneNumber: string;
    address: string;
    deliveryTime: string;
    paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
    paymentId?: string;
    razorpayOrderId?: string;
    orderStatus: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
    otpVerified: boolean;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
};

export const Order = models.Order || model("Order", OrderSchema);
