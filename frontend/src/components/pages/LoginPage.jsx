import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, LogIn, CheckCircle, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Store token and user info
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify({ name: data.name, email: data.email, role: data.role }));

            setSuccess(`Welcome back, ${data.name}!`);
            setTimeout(() => navigate('/'), 1500);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background-dark flex items-center justify-center relative overflow-hidden px-4">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient orbs */}
                <motion.div
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-dark/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Back to Home */}
            <motion.div
                className="absolute top-6 left-6 z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <Link
                    to="/"
                    className="flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-300 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </motion.div>

            {/* Login Card */}
            <motion.div
                className="relative z-10 w-full max-w-md"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/20">
                    {/* Logo & Title */}
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="relative inline-block mb-4">
                            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />
                            <img
                                src="https://yt3.googleusercontent.com/nlTpu0fMg5ncB695ZvyfFaVzq3VooYZiMAUq3VYpt_SRpE2MoRyd35E1EjACdnSDN7ihZWZcOA=s160-c-k-c0x00ffffff-no-rj"
                                alt="AJCE Logo"
                                className="w-20 h-20 object-contain relative z-10 drop-shadow-lg p-1 bg-white/90 rounded-full mx-auto"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/100x100/3b82f6/ffffff?text=AJCE";
                                }}
                            />
                        </div>
                        <h1 className="text-2xl font-serif font-bold text-white mb-1">
                            Welcome Back
                        </h1>
                        <p className="text-text-muted text-sm">
                            Sign in to Amal Jyothi College of Engineering
                        </p>
                    </motion.div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Error Message */}
                        {error && (
                            <motion.div
                                className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                {error}
                            </motion.div>
                        )}

                        {/* Success Message */}
                        {success && (
                            <motion.div
                                className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <CheckCircle className="w-4 h-4 shrink-0" />
                                {success}
                            </motion.div>
                        )}

                        {/* Email Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label className="block text-sm font-medium text-text-muted mb-2">
                                Email Address
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors duration-300" />
                                <input
                                    id="login-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your.email@ajce.in"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-sm"
                                />
                            </div>
                        </motion.div>

                        {/* Password Field */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label className="block text-sm font-medium text-text-muted mb-2">
                                Password
                            </label>
                            <div className="relative group">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors duration-300" />
                                <input
                                    id="login-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full pl-11 pr-11 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors duration-300"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </motion.div>

                        {/* Remember Me & Forgot Password */}
                        <motion.div
                            className="flex items-center justify-between"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="peer sr-only"
                                    />
                                    <div className="w-4 h-4 border border-white/20 rounded bg-white/[0.05] peer-checked:bg-primary peer-checked:border-primary transition-all duration-300" />
                                    <svg
                                        className="absolute top-0.5 left-0.5 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs text-text-muted group-hover:text-white transition-colors duration-300">
                                    Remember me
                                </span>
                            </label>
                            <a
                                href="#"
                                className="text-xs text-primary hover:text-primary-light transition-colors duration-300"
                            >
                                Forgot password?
                            </a>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <button
                                id="login-submit"
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm"
                            >
                                {isLoading ? (
                                    <>
                                        <motion.div
                                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                        />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        <LogIn className="w-4 h-4" />
                                        Sign In
                                    </>
                                )}
                            </button>
                        </motion.div>
                    </form>

                    {/* Divider */}
                    <motion.div
                        className="my-6 flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="text-xs text-text-muted">or</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </motion.div>

                    {/* Google Sign In */}
                    <motion.button
                        id="google-signin"
                        className="w-full py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white font-medium hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        onClick={() => alert('Google Sign-In coming soon!')}
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Continue with Google
                    </motion.button>

                    {/* Sign Up Link */}
                    <motion.p
                        className="text-center mt-6 text-sm text-text-muted"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        Don't have an account?{' '}
                        <a href="#" className="text-primary hover:text-primary-light font-medium transition-colors duration-300">
                            Sign Up
                        </a>
                    </motion.p>
                </div>

                {/* Subtle badge */}
                <motion.p
                    className="text-center mt-6 text-xs text-text-muted/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    © 2026 Amal Jyothi College of Engineering. All rights reserved.
                </motion.p>
            </motion.div>
        </div>
    );
}
