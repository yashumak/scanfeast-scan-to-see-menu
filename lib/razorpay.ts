import Razorpay from "razorpay";

let razorpay: Razorpay | null = null;

export function getRazorpay(): Razorpay {
    if (razorpay) return razorpay;
    const keyId = process.env.RAZORPAY_KEY_ID as string | undefined;
    const keySecret = process.env.RAZORPAY_KEY_SECRET as string | undefined;
    if (!keyId || !keySecret) {
        throw new Error("Razorpay env vars not set");
    }
    razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
    return razorpay;
}


