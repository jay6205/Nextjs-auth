"use client";

import { ResetPasswordForm } from "@/components/reset-password-form";
import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export default function ResetPasswordPage() {
    
    return (
        <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-semibold mb-6 text-center">
                    Reset Password
                </h1>

                <ResetPasswordForm />
            </div>
        </div>
    );
}
