'use client';
import React, {useEffect, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ColorBlocks() {
    const [path, setPath] = React.useState<string>("/");
    const transition1 = { duration: 0.5, delay: 0.1, ease: [0.87, 0, 0.13, 1] };
    const transition2 = { duration: 0.6, delay: 0.3, ease: [0.87, 0, 0.13, 1] };
    const transition3 = { duration: 0.8, delay: 0.5, ease: [0.87, 0, 0.13, 1] };
    const [links, setLinks] = useState([
        { name: "Home", path: "/", className:"card card1", transition: transition1 },
        { name: "About", path: "/about", className:"card card2", transition: transition2 },
        { name: "Contact", path: "/contact", className:"card card3", transition: transition3 },
    ]);
    
    useEffect(() => {
        setPath(window.location.pathname);
    }, [path]);

    useEffect(() => {
       if (path === "/about") {
            setLinks([
                { name: "Home", path: "/", className:"card card1", transition: transition1 },
                { name: "Work", path: "/work", className:"card card2", transition: transition2 },
                { name: "Contact", path: "/contact", className:"card card3", transition: transition3 },
            ]);
        } else if (path === "/contact") {
            setLinks([
                { name: "Home", path: "/", className:"card card1", transition: transition1 },
                { name: "About", path: "/about", className:"card card2", transition: transition2 },
                { name: "Work", path: "/work", className:"card card3", transition: transition3 },
            ]);
        } else if (path === "/work") {
            setLinks([
                { name: "Home", path: "/", className:"card card1", transition: transition1 },
                { name: "About", path: "/about", className:"card card2", transition: transition2 },
                { name: "Contact", path: "/contact", className:"card card3", transition: transition3 },
            ]);
        }
    }, [path]);

    return (
        <>
        <nav>
            <AnimatePresence>
                {links.map((link, index) => (
                    <motion.div className={link.className}
                        key={index}
                        initial={{ opacity: 0, x: 2000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={link.transition}
                        exit={{ opacity: 0, x: -100 }}>
                        <Link href={link.path}>
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
            </AnimatePresence>
        </nav>
        </>
    )
}
      