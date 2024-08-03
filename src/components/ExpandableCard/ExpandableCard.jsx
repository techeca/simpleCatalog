import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsieClick";
import CloseIcon from "./Closebtn";
import CardList from "./CardList";
import CardDetail from "./CardDetail";

export default function ExpandableCard() {
    const [active, setActive] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        document.body.style.overflow = active ? "hidden" : "auto";

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            {active && typeof active === "object" && (
                <CardDetail active={active} setActive={setActive} ref={ref} />
            )}
            <CardList setActive={setActive} />
        </>
    );
}
