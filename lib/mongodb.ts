import mongoose from "mongoose";

// Note: don't throw at import time; it breaks build-time bundling.
// Validate lazily when we actually attempt to connect.
const MONGODB_URI = process.env.MONGODB_URI as string | undefined;

type MongooseCache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };

declare global {
    // eslint-disable-next-line no-var
    var mongooseCache: MongooseCache | undefined;
}

let cache: MongooseCache = global.mongooseCache || { conn: null, promise: null };

export async function connectToDatabase(): Promise<typeof mongoose> {
    if (cache.conn) return cache.conn;

    if (!cache.promise) {
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI is not set in environment");
        }
        cache.promise = mongoose.connect(MONGODB_URI, {
            dbName: "scanfeast",
            bufferCommands: false,
            maxPoolSize: 5,
        }).catch((err) => {
            // Surface a clear error for API routes
            const masked = (MONGODB_URI || "").replace(/:\\S+@/, ":***@");
            console.error("MongoDB connection failed:", err?.message || err, "URI:", masked);
            throw err;
        });
    }
    cache.conn = await cache.promise;
    global.mongooseCache = cache;
    return cache.conn;
}