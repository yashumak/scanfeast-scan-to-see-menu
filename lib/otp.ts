// Simple OTP service - in production, use a proper SMS service like Twilio

export function generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function sendOTP(phoneNumber: string, otp: string): Promise<boolean> {
    // In production, integrate with SMS service like Twilio, AWS SNS, etc.
    // For now, we'll simulate sending OTP
    console.log(`Sending OTP ${otp} to ${phoneNumber}`);
    
    // Simulate async operation
    return new Promise((resolve) => {
        setTimeout(() => {
            // In demo, always succeed. In production, handle actual SMS sending
            resolve(true);
        }, 1000);
    });
}

export function verifyOTP(phoneNumber: string, inputOTP: string, storedOTP: string): boolean {
    // In production, verify against stored OTP with expiry time
    return inputOTP === storedOTP;
}
