'use client';
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav>
                <AnimatePresence>
                    <motion.div className="card card1"
                        initial={{ opacity: 0, x: 2000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.87, 0, 0.13, 1] }}
                        exit={{ opacity: 0, x: -100 }}>
                        <Link href="/">
                            Home
                        </Link>
                    </motion.div>
                    <motion.div className="card card2"
                        initial={{ opacity: 0, x: 1600 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.87, 0, 0.13, 1] }}
                        exit={{ opacity: 0, x: -100 }}
                    >
                        <Link href="/about">
                            About
                        </Link>

                    </motion.div>
                    <motion.div className="card card3"
                        initial={{ opacity: 0, x: 1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8, delay: 0.5, ease: [0.87, 0, 0.13, 1] }}
                        exit={{ opacity: 0, x: -100 }}>
                        <Link href="/contact">
                            Contact
                        </Link>

                    </motion.div>

                </AnimatePresence>
        </nav>
    );
};

export default Navbar;