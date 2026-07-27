"use server";

import { getTranslations } from 'next-intl/server';

import { MongoClient } from "mongodb";
import { contactSchema } from "./validations/contact-schema";

export async function submitContactForm(data) {
    const t = await getTranslations('ContactForm');

    const result = contactSchema.safeParse(data);

    if (!result.success) {
        return {
            success: false,
            message: t('message-server'),
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { name, email, subject, message } = result.data;

    let client;

    try {
        client = await MongoClient.connect("mongodb+srv://contact-form:a2POTEbPEgthzBtT@cluster0.it2zjka.mongodb.net/?appName=Cluster0");

        const db = client.db();

        await db.collection("contact-form").insertOne({
            name,
            email,
            subject,
            message,
            createdAt: new Date(),
        });

        return {
            success: true,
            message: t('successful-message-server'),
        };
    } catch (error) {
        console.error("MongoDB Error:", error);

        return {
            success: false,
            message: t('error-message-server'),
        };
    } finally {
        if (client) {
            await client.close();
        }
    };
};