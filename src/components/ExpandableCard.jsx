import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsieClick";
import CardDetail from "./ExpandableCard/CardDetail";
import CloseIcon from "./ExpandableCard/Closebtn";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

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
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-20 overflow-scroll">
            {/*Detalles de tarjeta*/}
            {/*btn cerrar pero no se ve (al expandir tarjeta)*/}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="z-10 flex absolute top-2 right-2 lg:hidden items-center justify-center bg-black rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-[90%] md:h-[80%] xl:w-[60%] sm:w-[80%] md:grid flex flex-col grid-cols-2 gap-6 bg-white border-[0px] border-black overflow-hidden"
            >

              {/*imagen de tarjeta (expandir tarjeta)*/}
              <motion.div layoutId={`image-${active.title}-${id}`} className="flex flex-col w-full justify-center items-center overflow-hidden">
                <motion.img
                  layoutId={`imagei-${active.title}-${id}`}
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="h-full w-fit object-cover md:aspect-video pt-6 md:pt-0"
                />
              </motion.div>

              {/*titulo de tarjeta (expandir tarjeta) w-[330px] h-[550px] */}
              <div className="w-full h-full overflow-y-auto md:py-6 py-0 md:pr-6 pr-0 overflow-x-hidden flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-6 md:p-0">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="uppercase font-bold text-lg"
                    >
                      {active.title}
                    </motion.h3>
                    {/*descripcion (expandir tarjeta)*/}
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className={`font-bold text-lg flex items-center`}
                    >
                      {/*active.description*/}
                      {active.content.isDiscount.value ?
                        <span className={`${active.content.isDiscount ? `text-red-500` : `text-black`}`}>${active.content.price - (Number(active.content.price) * active.content.isDiscount.percent / 100)}</span>
                        :
                        `$${active.content.price}`
                      }
                      {active.content.isDiscount.value &&
                        <>
                          <span className="text-black opacity-80 font-normal text-sm ml-1 line-through">${active.content.price}</span>
                          <span className="text-xs font-normal border-red-500 text-red-500 border-[1px] ml-1 px-2 py-0.5">{active.content.isDiscount.percent}% OFF</span>
                        </>
                      }
                    </motion.p>

                    <div className="pt-3">
                      <div className="">
                        <span className="font-bold text-sm">COLOR:</span>
                      </div>
                      <div className="mt-3 flex gap-3">
                        {active.content.color.map(i =>
                          <p className={`w-8 h-8 rounded-full border-[0px] border-black`} style={{ backgroundColor: i }}></p>
                        )}
                      </div>
                    </div>

                    <div className="pt-6">
                      <div className="">
                        <span className="font-bold text-sm">SIZE:</span>
                      </div>
                      <div className="flex gap-3 mt-3">
                        {active.content.sizes.map(i =>
                          <div className="border-[1px] flex justify-center items-center border-black text-sm" style={{ height: "48px", minWidth: "48px" }}>{i}</div>
                        )}
                      </div>
                    </div>

                    <div className="pt-6">
                      <div className="">
                        <span className="font-bold text-sm">DESCRIPTION:</span>
                      </div>
                      <div className="flex mt-2 flex-col text-sm">
                        {Object.keys(active.content.description).map(i =>
                          <p key={`desc-${i}-${id}`} className="font-semibold">{active.content.description[i].name}: <span className="font-normal">{active.content.description[i].value}</span></p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm"
                  >
                    {active.content.text}
                  </motion.div>
                </div>
                <button className="w-full bg-black self-end text-white py-3 font-semibold hover:bg-[#161616]">ASK</button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="flex flex-wrap justify-center gap-6">
        {/*Lista de tarjetas*/}
        {cards.map((card, index) => (
          <motion.div layoutId={`card-${card.title}-${id}`} className="max-w-xs w-full group/card flex flex-col" key={`card-${card.title}-${id}`} onClick={() => setActive(card)}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={"cursor-pointer overflow-hidden relative card h-[550px] shadow-xl flex flex-col justify-between bg-cover"}>
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-30"></div>

                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="-z-10 h-full absolute w-full object-cover border-black"
                />

              </motion.div>
              <div className="p-4 relative">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left z-10"
                >
                  {/*card.title*/}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {/*card.description*/}
                </motion.p>
              </div>

              <motion.button
                layoutId={`button-${card.title}-${id}`}
                initial={{ y: 20, opacity: 0 }}
                animate={isHovered === index ? { y: -200, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 w-24 py-2 text-sm self-center ml-9 z-10 text-white font-bold mt-4 mb-6"
              >
                {/*card.ctaText*/}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </motion.button>
            </div>

          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://img.ltwebstatic.com/images3_pi/2024/06/16/43/171854805284157f69deefd789560d4d6e5293f63a.jpg",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: {
      price: "10.000",
      isDiscount: {
        value: false,
        percent: "0%"
      },
      color: ["#3f6655", "#112d7e"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: {
        composition: {
          name: "Composition",
          value: "94% Polyester, 6% Elastane"
        },
        sleeveLength: {
          name: "Sleeve Length",
          value: "Sleeveless"
        },
        color: {
          name: "Color",
          value: "Multicolor"
        },
        neckline: {
          name: "Neckline",
          value: "Strapless"
        },
        type: {
          name: "Type",
          value: "Bodycon"
        }
      }
    }
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://img.ltwebstatic.com/images3_pi/2024/06/20/85/1718876853a12a9d8ac73ea217842f7963b01e5154.jpg",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: {
      price: "10.000",
      isDiscount: {
        value: false,
        percent: "0%"
      },
      color: ["#3f6655"],
      sizes: ["S", "M", "L", "XL"],
      description: {
        composition: {
          name: "Composition",
          value: "94% Polyester, 6% Elastane"
        },
        sleeveLength: {
          name: "Sleeve Length",
          value: "Sleeveless"
        },
        color: {
          name: "Color",
          value: "Multicolor"
        },
        neckline: {
          name: "Neckline",
          value: "Strapless"
        },
        type: {
          name: "Type",
          value: "Bodycon"
        }
      }
    }
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://img.ltwebstatic.com/images3_pi/2024/06/05/99/17175558319258f6283b6fa3f8e6b3410deb4c7ae3.jpg",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: {
      price: 10000,
      isDiscount: {
        value: true,
        percent: 20
      },
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus voluptatibus autem atque et eos, magnam ipsa inventore veniam cumque nostrum rem numquam iusto ducimus earum saepe quaerat soluta aspernatur quo!', 
      color: ["#0042ac"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: {
        composition: {
          name: "Composition",
          value: "94% Polyester, 6% Elastane"
        },
        sleeveLength: {
          name: "Sleeve Length",
          value: "Sleeveless"
        },
        color: {
          name: "Color",
          value: "Multicolor"
        },
        neckline: {
          name: "Neckline",
          value: "Strapless"
        },
        type: {
          name: "Type",
          value: "Bodycon"
        }
      }
    }
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "https://img.ltwebstatic.com/images3_pi/2024/06/06/5c/171768937231584b2e8279d2c9c8c51e9c8a5fc8b6_thumbnail_1024x.webp",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: {
      price: "10.000",
      isDiscount: {
        value: false,
        percent: "0%"
      },
      color: ["#3f6655", "#112d7e"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: {
        composition: {
          name: "Composition",
          value: "94% Polyester, 6% Elastane"
        },
        sleeveLength: {
          name: "Sleeve Length",
          value: "Sleeveless"
        },
        color: {
          name: "Color",
          value: "Multicolor"
        },
        neckline: {
          name: "Neckline",
          value: "Strapless"
        },
        type: {
          name: "Type",
          value: "Bodycon"
        }
      }
    }
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://img.ltwebstatic.com/images3_pi/2024/06/07/f8/1717694230de7040bcdf8699da9c018486f20551fc.jpg",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: {
      price: "10.000",
      isDiscount: {
        value: false,
        percent: "0%"
      },
      color: ["#3f6655", "#112d7e"],
      sizes: ["XS", "S", "M", "L", "XL"],
      description: {
        composition: {
          name: "Composition",
          value: "94% Polyester, 6% Elastane"
        },
        sleeveLength: {
          name: "Sleeve Length",
          value: "Sleeveless"
        },
        color: {
          name: "Color",
          value: "Multicolor"
        },
        neckline: {
          name: "Neckline",
          value: "Strapless"
        },
        type: {
          name: "Type",
          value: "Bodycon"
        }
      }
    }
  },
];
