"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CheckoutButton from "./checkout-button";

interface OrderFormProps {
    isOpen: boolean;
    onClose: () => void;
    item: {
        id: string;
        name: string;
        price: number;
        image?: string;
    };
}

export default function OrderForm({ isOpen, onClose, item }: OrderFormProps) {
    const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [orderId, setOrderId] = useState<string | null>(null);

    // Form data
    const [formData, setFormData] = useState({
        customerName: '',
        phoneNumber: '',
        address: '',
        deliveryTime: '',
        quantity: 1,
        notes: ''
    });


    const handleInputChange = (field: string, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };


    const handleCreateOrder = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    itemId: item.id,
                    itemName: item.name,
                    price: item.price,
                    quantity: formData.quantity,
                    customerName: formData.customerName,
                    phoneNumber: formData.phoneNumber,
                    address: formData.address,
                    deliveryTime: formData.deliveryTime,
                    notes: formData.notes
                })
            });

            const data = await res.json();

            if (res.ok) {
                setOrderId(data.data.orderId);
                setStep('payment');
            } else {
                setError(data.error || "Failed to create order");
            }
        } catch (err) {
            setError("Network error");
        } finally {
            setLoading(false);
        }
    };

    const handlePaymentSuccess = () => {
        setStep('success');
        // Update order payment status
        if (orderId) {
            fetch(`/api/orders/${orderId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    paymentStatus: 'completed',
                    orderStatus: 'confirmed'
                })
            }).catch(console.error);
        }
    };

    const handleClose = () => {
        setStep('details');
        setFormData({
            customerName: '',
            phoneNumber: '',
            address: '',
            deliveryTime: '',
            quantity: 1,
            notes: ''
        });
        setOrderId(null);
        setError(null);
        onClose();
    };

    const totalAmount = item.price * formData.quantity;

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-center">
                        {step === 'details' && 'Order Details'}
                        {step === 'payment' && 'Payment'}
                        {step === 'success' && 'Order Confirmed!'}
                    </DialogTitle>
                </DialogHeader>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                )}

                {step === 'details' && (
                    <div className="space-y-4">
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                    {item.image && (
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                    )}
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-sm text-gray-600">₹{item.price}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="customerName">Full Name *</Label>
                                <Input
                                    id="customerName"
                                    value={formData.customerName}
                                    onChange={(e) => handleInputChange('customerName', e.target.value)}
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <Label htmlFor="phoneNumber">Phone Number *</Label>
                                <Input
                                    id="phoneNumber"
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <Label htmlFor="address">Delivery Address *</Label>
                                <Textarea
                                    id="address"
                                    value={formData.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    placeholder="Enter complete delivery address"
                                    rows={3}
                                />
                            </div>

                            <div>
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input
                                    id="quantity"
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={formData.quantity}
                                    onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 1)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="deliveryTime">Preferred Delivery Time *</Label>
                                <Select onValueChange={(value) => handleInputChange('deliveryTime', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select delivery time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="30-45 mins">30-45 minutes</SelectItem>
                                        <SelectItem value="1 hour">1 hour</SelectItem>
                                        <SelectItem value="1.5 hours">1.5 hours</SelectItem>
                                        <SelectItem value="2 hours">2 hours</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="notes">Special Instructions (Optional)</Label>
                                <Textarea
                                    id="notes"
                                    value={formData.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    placeholder="Any special instructions for your order"
                                    rows={2}
                                />
                            </div>

                            <div className="bg-gray-50 p-4 rounded">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Total Amount:</span>
                                    <Badge variant="secondary" className="text-lg">₹{totalAmount}</Badge>
                                </div>
                            </div>

                            <Button
                                onClick={handleCreateOrder}
                                className="w-full"
                                disabled={!formData.customerName || !formData.phoneNumber || !formData.address || !formData.deliveryTime || loading}
                            >
                                {loading ? "Creating Order..." : "Continue to Payment"}
                            </Button>
                        </div>
                    </div>
                )}


                {step === 'payment' && (
                    <div className="space-y-4">
                        <div className="text-center">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-600">Quantity: {formData.quantity}</p>
                            <p className="text-lg font-bold">Total: ₹{totalAmount}</p>
                        </div>

                        <CheckoutButton
                            amountPaise={totalAmount * 100}
                            receipt={orderId || `order_${Date.now()}`}
                            name="ScanFeast"
                            description={`Order for ${item.name}`}
                            onSuccess={handlePaymentSuccess}
                        />

                        <Button
                            onClick={() => setStep('details')}
                            variant="ghost"
                            className="w-full"
                        >
                            Back to Details
                        </Button>
                    </div>
                )}

                {step === 'success' && (
                    <div className="space-y-4 text-center">
                        <div className="text-6xl">🎉</div>
                        <div>
                            <h3 className="text-xl font-bold text-green-600">Order Confirmed!</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Your order has been placed successfully
                            </p>
                            {orderId && (
                                <p className="text-xs text-gray-500 mt-1">
                                    Order ID: {orderId}
                                </p>
                            )}
                        </div>

                        <div className="bg-green-50 p-4 rounded">
                            <p className="text-sm text-green-800">
                                We'll send you updates about your order via SMS.
                                Expected delivery: {formData.deliveryTime}
                            </p>
                        </div>

                        <Button onClick={handleClose} className="w-full">
                            Done
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
