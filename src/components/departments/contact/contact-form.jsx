"use client";

import { useTranslations, useLocale } from 'next-intl';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@/actions/https";

export default function ContactForm() {
    const t = useTranslations('ContactForm');
    const locale = useLocale();

    const [serverResponse, setServerResponse] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm();

    const onSubmit = async (data) => {
        setServerResponse(null);

        const result = await submitContactForm(data);

        if (!result.success) {
            if (result.errors) {
                Object.entries(result.errors).forEach(([field, messages]) => {
                    setError(field, {
                        type: "server",
                        message: messages[0],
                    });
                });
            }

            setServerResponse(result);
            return;
        };

        setServerResponse(result);
        reset();
    };

    const inputStyles = `${locale === "en" ? "font-manrope" : "font-vazirmatn"} rounded-xl text-fg text-[1rem] bg-transparent border border-border backdrop-filter-[blur-md] py-4 px-5 focus:border-border-hi w-full outline-0 hover:border-border-hi font-light`;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-5">

                {serverResponse?.message && (
                    <div
                        className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} rounded-xl p-4 text-sm ${serverResponse.success
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}
                    >
                        {serverResponse.message}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-5">

                    <div>
                        <input
                            type="text"
                            placeholder={`${t("your-name")}`}
                            className={inputStyles}
                            {...register("name", {
                                required: t("name-required"),
                                minLength: {
                                    value: 3,
                                    message: t("name-min-length"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: t("name-max-length"),
                                },
                            })}
                        />

                        {errors.name && (
                            <p className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-red-500 mt-1 text-sm`}>
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder={`${t("your-email")}`}
                            className={inputStyles}
                            {...register("email", {
                                required: t("email-required"),
                                maxLength: {
                                    value: 100,
                                    message: t("email-max-length"),
                                },
                                pattern: {
                                    value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: t("email-pattern"),
                                },
                                validate: {
                                    noSpaces: (value) =>
                                        !/\s/.test(value) ||
                                        t("email-validate"),
                                },
                            })}
                        />

                        {errors.email && (
                            <p className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-red-500 mt-1 text-sm`}>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder={`${t("your-subject")}`}
                        className={inputStyles}
                        {...register("subject", {
                            required: t("subject-required"),
                            minLength: {
                                value: 5,
                                message: t("subject-min-length"),
                            },
                            maxLength: {
                                value: 100,
                                message: t("subject-max-length"),
                            },
                        })}
                    />

                    {errors.subject && (
                        <p className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-red-500 mt-1 text-sm`}>
                            {errors.subject.message}
                        </p>
                    )}
                </div>

                <div>
                    <textarea
                        rows={10}
                        placeholder={`${t("your-message")}`}
                        className={inputStyles}
                        {...register("message", {
                            required: t("message-required"),
                            minLength: {
                                value: 10,
                                message: t("message-min-length"),
                            },
                            maxLength: {
                                value: 1000,
                                message: t("message-max-length"),
                            },
                        })}
                    />

                    {errors.message && (
                        <p className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-red-500 mt-1 text-sm`}>
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
    ${locale === "en" ? "font-manrope" : "font-vazirmatn"}
    bg-hero px-6 py-3 rounded-xl w-full font-bold text-base
    disabled:opacity-50 disabled:cursor-not-allowed
  `}
                >
                    {isSubmitting ? t("isSubmitting") : t("submitting")}
                </button>

            </div>
        </form>
    );
}