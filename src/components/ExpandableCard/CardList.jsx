import React from "react";
import { motion } from "framer-motion";

const cards = [
    {
      description: "Lana Del Rey",
      title: "Summertime Sadness",
      src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      ctaText: "Mirar",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for
            her melancholic and cinematic music style. Born Elizabeth Woolridge
            Grant in New York City, she has captivated audiences worldwide with
            her haunting voice and introspective lyrics. <br /> <br /> Her songs
            often explore themes of tragic romance, glamour, and melancholia,
            drawing inspiration from both contemporary and vintage pop culture.
            With a career that has seen numerous critically acclaimed albums, Lana
            Del Rey has established herself as a unique and influential figure in
            the music industry, earning a dedicated fan base and numerous
            accolades.
          </p>
        );
      },
    },
    {
      description: "Babbu Maan",
      title: "Mitran Di Chhatri",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Babu Maan, a legendary Punjabi singer, is renowned for his soulful
            voice and profound lyrics that resonate deeply with his audience. Born
            in the village of Khant Maanpur in Punjab, India, he has become a
            cultural icon in the Punjabi music industry. <br /> <br /> His songs
            often reflect the struggles and triumphs of everyday life, capturing
            the essence of Punjabi culture and traditions. With a career spanning
            over two decades, Babu Maan has released numerous hit albums and
            singles that have garnered him a massive fan following both in India
            and abroad.
          </p>
        );
      },
    },
  
    {
      description: "Metallica",
      title: "For Whom The Bell Tolls",
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Metallica, an iconic American heavy metal band, is renowned for their
            powerful sound and intense performances that resonate deeply with
            their audience. Formed in Los Angeles, California, they have become a
            cultural icon in the heavy metal music industry. <br /> <br /> Their
            songs often reflect themes of aggression, social issues, and personal
            struggles, capturing the essence of the heavy metal genre. With a
            career spanning over four decades, Metallica has released numerous hit
            albums and singles that have garnered them a massive fan following
            both in the United States and abroad.
          </p>
        );
      },
    },
    {
      description: "Led Zeppelin",
      title: "Stairway To Heaven",
      src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Led Zeppelin, a legendary British rock band, is renowned for their
            innovative sound and profound impact on the music industry. Formed in
            London in 1968, they have become a cultural icon in the rock music
            world. <br /> <br /> Their songs often reflect a blend of blues, hard
            rock, and folk music, capturing the essence of the 1970s rock era.
            With a career spanning over a decade, Led Zeppelin has released
            numerous hit albums and singles that have garnered them a massive fan
            following both in the United Kingdom and abroad.
          </p>
        );
      },
    },
    {
      description: "Mustafa Zahid",
      title: "Toh Phir Aao",
      src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
            renowned for its intense storyline and powerful performances. Directed
            by Mohit Suri, the film has become a significant work in the Indian
            film industry. <br /> <br /> The movie explores themes of love,
            redemption, and sacrifice, capturing the essence of human emotions and
            relationships. With a gripping narrative and memorable music,
            &quot;Aawarapan&quot; has garnered a massive fan following both in
            India and abroad, solidifying Emraan Hashmi&apos;s status as a
            versatile actor.
          </p>
        );
      },
    },
  ];

export default function CardList({ setActive }) {
    return (
        <ul className="max-w-2xl mx-auto w-full gap-4">
            {cards.map((card, index) => (
                <motion.div
                    layoutId={`card-${card.title}-${index}`}
                    key={`card-${card.title}-${index}`}
                    onClick={() => setActive(card)}
                    className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                >
                    <div className="flex gap-4 flex-col md:flex-row ">
                        <motion.div layoutId={`image-${card.title}-${index}`}>
                            <img
                                width={100}
                                height={100}
                                src={card.src}
                                alt={card.title}
                                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                            />
                        </motion.div>
                        <div className="">
                            <motion.h3
                                layoutId={`title-${card.title}-${index}`}
                                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                            >
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${index}`}
                                className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                            >
                                {card.description}
                            </motion.p>
                        </div>
                    </div>
                    <motion.button
                        layoutId={`button-${card.title}-${index}`}
                        className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                    >
                        {card.ctaText}
                    </motion.button>
                </motion.div>
            ))}
        </ul>
    );
}
