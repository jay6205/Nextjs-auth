"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import axios from "axios"

export function ResetPasswordForm() {
    const [token, setToken] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        try {
            const params = new URLSearchParams(window.location.search);
            const urlToken = params.get("token") || "";
            setToken(urlToken);
        } catch (err) {
            // won't normally happen, but be safe
            setToken("");
        }
    }, []);


    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!password) {
            newErrors.password = "Password is required"
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // ensure token exists
        const submitToken =
            token || new URLSearchParams(window.location.search).get("token") || "";
        if (!submitToken) {
            setErrors({ form: "Missing token. Use the link sent to your email." });
            return;
        }

        setIsLoading(true);
        setErrors({});

        try {
            const response = await axios.post("/api/users/resetpassword", {
                token: submitToken,
                password,
            });

            if (response?.data?.success) {
                alert("Password reset successful!");
                window.location.href = "/login";
            } else {
                setErrors({ form: response?.data?.message || "Something went wrong." });
            }
        } catch (err: any) {
            // Better error logging so you can see server response
            console.error("Reset password error (full):", err);
            console.error("err.response:", err?.response);
            const status = err?.response?.status;
            const data = err?.response?.data;

            // Show server-provided message if available
            const msg = data?.message || data?.error || `Server returned ${status || "an error"}`;
            setErrors({ form: msg });

            // Also suggest to check network tab and server logs
            console.log("Request payload:", { token: submitToken, password });
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                    New Password
                </label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Enter your new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={!!errors.password}
                    className={errors.password ? "border-destructive" : ""}
                />
                {errors.password && (
                    <div className="flex gap-2 text-sm text-destructive mt-1">
                        <AlertCircle className="size-4 flex-shrink-0 mt-0.5" />
                        {errors.password}
                    </div>
                )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
        </form>
    )
}
