"use client"

import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export default function VerifyEmailPage() {
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true);

    const verifyUserEmail = async () => {
        try {
            const response = await axios.post('/api/users/verifyemail', { token })
            setVerified(true)
        } catch (error: any) {
            setError(true)
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")
    }, [])

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail()
        }
    }, [token])

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-black mb-6">Verify Email</h1>

                {loading && (
                    <div className="animate-pulse text-black text-lg">
                        Verifying your email...
                    </div>
                )}

                {verified && (
                    <div className="text-center space-y-4">
                        <h2 className="text-xl font-semibold text-green-600">
                            Email Verified Successfully!
                        </h2>
                        <Link
                            href="/login"
                            className="inline-block bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Go to Login
                        </Link>
                    </div>
                )}

                {error && (
                    <div className="text-center space-y-4">
                        <h2 className="text-xl font-semibold text-red-600">
                            Invalid or Expired Link
                        </h2>
                        <p className="text-gray-600">
                            Please request a new verification email.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );

}
