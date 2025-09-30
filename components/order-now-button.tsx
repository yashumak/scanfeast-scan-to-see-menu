"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import OrderForm from "./order-form";

interface OrderNowButtonProps {
    item: {
        id: string;
        name: string;
        price: number;
        image?: string;
    };
    className?: string;
}

export default function OrderNowButton({ item, className }: OrderNowButtonProps) {
    const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

    return (
        <>
            <Button 
                onClick={() => setIsOrderFormOpen(true)}
                className={`bg-green-600 hover:bg-green-700 text-white font-medium ${className}`}
            >
                Order Now - ₹{item.price}
            </Button>
            
            <OrderForm 
                isOpen={isOrderFormOpen}
                onClose={() => setIsOrderFormOpen(false)}
                item={item}
            />
        </>
    );
}
