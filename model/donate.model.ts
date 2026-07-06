import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDonate extends Document {
    profile_image?: string;
    name: string;
    email: string;
    group: string;
    location: string;
    mobile: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}

const DonateSchema = new Schema<IDonate>(
    {
        profile_image: {
            type: String,
            default: "",
            trim: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            default: "",
            trim: true,
            lowercase: true,
        },

        group: {
            type: String,
            required: true,
            trim: true,
        },

        location: {
            type: String,
            required: true,
            trim: true,
        },

        mobile: {
            type: String,
            required: true,
            trim: true,
        },

        date: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

if (mongoose.models.Donate) {
    delete mongoose.models.Donate;
}

const Donate: Model<IDonate> =
    mongoose.model<IDonate>("Donate", DonateSchema);

export default Donate;