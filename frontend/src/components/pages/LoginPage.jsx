import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, LogIn, CheckCircle, AlertCircle, User, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function LoginPage() {
    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState('');
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

        const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
        const body = isRegister
            ? { name, email, password }
            : { email, password };

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || (isRegister ? 'Registration failed' : 'Login failed'));
            }

            // Store token and user info
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify({ name: data.name, email: data.email, role: data.role }));

            setSuccess(isRegister ? `Account created! Welcome, ${data.name}!` : `Welcome back, ${data.name}!`);
            setTimeout(() => navigate('/'), 1500);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const switchMode = () => {
        setIsRegister(!isRegister);
        setError('');
        setSuccess('');
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="min-h-screen bg-background-dark flex items-center justify-center relative overflow-hidden px-4">
            {/* Animated Background */}
            <div className="absolute inset-0">
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

            {/* Login/Register Card */}
            <motion.div
                className="relative z-10 w-full max-w-md"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/20">
                    {/* Logo & Title */}
                    <motion.div
                        className="text-center mb-6"
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
                            {isRegister ? 'Create Account' : 'Welcome Back'}
                        </h1>
                        <p className="text-text-muted text-sm">
                            {isRegister
                                ? 'Register at Amal Jyothi College of Engineering'
                                : 'Sign in to Amal Jyothi College of Engineering'}
                        </p>
                    </motion.div>

                    {/* Tab Toggle */}
                    <div className="flex mb-6 bg-white/[0.05] rounded-xl p-1 border border-white/[0.06]">
                        <button
                            type="button"
                            onClick={() => { if (isRegister) switchMode(); }}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${!isRegister
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'text-text-muted hover:text-white'
                                }`}
                        >
                            <LogIn className="w-4 h-4" />
                            Sign In
                        </button>
                        <button
                            type="button"
                            onClick={() => { if (!isRegister) switchMode(); }}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${isRegister
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'text-text-muted hover:text-white'
                                }`}
                        >
                            <UserPlus className="w-4 h-4" />
                            Register
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Success Message */}
                        <AnimatePresence>
                            {success && (
                                <motion.div
                                    className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <CheckCircle className="w-4 h-4 shrink-0" />
                                    {success}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Name Field (Register only) */}
                        <AnimatePresence>
                            {isRegister && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <label className="block text-sm font-medium text-text-muted mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative group">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors duration-300" />
                                        <input
                                            id="register-name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your full name"
                                            required={isRegister}
                                            className="w-full pl-11 pr-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-sm"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

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
                                    placeholder={isRegister ? 'Create a password (min 6 chars)' : 'Enter your password'}
                                    required
                                    minLength={isRegister ? 6 : undefined}
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

                        {/* Remember Me & Forgot Password (Login only) */}
                        {!isRegister && (
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
                        )}

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
                                        {isRegister ? 'Creating Account...' : 'Signing in...'}
                                    </>
                                ) : (
                                    <>
                                        {isRegister ? <UserPlus className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}
                                        {isRegister ? 'Create Account' : 'Sign In'}
                                    </>
                                )}
                            </button>
                        </motion.div>
                    </form>

                    {/* Switch Mode Link */}
                    <motion.p
                        className="text-center mt-6 text-sm text-text-muted"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        {isRegister ? 'Already have an account? ' : "Don't have an account? "}
                        <button
                            type="button"
                            onClick={switchMode}
                            className="text-primary hover:text-primary-light font-medium transition-colors duration-300"
                        >
                            {isRegister ? 'Sign In' : 'Sign Up'}
                        </button>
                    </motion.p>
                </div>

                {/* Subtle badge */}
                <motion.p
                    className="text-center mt-6 text-xs text-text-muted/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    © 2026 Amal Jyothi College of Engineering. All rights reserved.
                </motion.p>
            </motion.div>
        </div>
    );
}
