"use client";

import React from "react";
import { ForgotPasswordForm } from "@/components/forgot-password-form";

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-semibold mb-6 text-center">
                    Forgot Password
                </h1>
                <ForgotPasswordForm />
            </div>
        </div>
    );
}
