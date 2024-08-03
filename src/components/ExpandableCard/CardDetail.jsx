import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import CloseIcon from "./Closebtn";

const CardDetail = forwardRef(({ active, setActive }, ref) => {
    return (
        <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
                key={`button-${active.title}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
            >
                <CloseIcon />
            </motion.button>
            <motion.div
                layoutId={`card-${active.title}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
                <motion.div layoutId={`image-${active.title}`}>
                    <img
                        width={200}
                        height={200}
                        src={active.src}
                        alt={active.title}
                        className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    />
                </motion.div>
                <div>
                    <div className="flex justify-between items-start p-4">
                        <div className="">
                            <motion.h3
                                layoutId={`title-${active.title}`}
                                className="font-bold text-neutral-700 dark:text-neutral-200"
                            >
                                {active.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${active.description}`}
                                className="text-neutral-600 dark:text-neutral-400"
                            >
                                {active.description}
                            </motion.p>
                        </div>
                        <motion.a
                            layoutId={`button-${active.title}`}
                            href={active.ctaLink}
                            target="_blank"
                            className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                        >
                            {active.ctaText}
                        </motion.a>
                    </div>
                    <div className="pt-4 relative px-4">
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                        >
                            {typeof active.content === "function"
                                ? active.content()
                                : active.content}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
});

export default CardDetail;
