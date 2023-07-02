import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const variants = {
  normal: {
    opacity: 1,
  },
  clicked: {
    opacity: 0.3,
  },
};

const Keyboard = ({
  clickOnLetter,
  lettersClicked,
}: {
  clickOnLetter: Function;
  lettersClicked: string[];
}) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const onClick = (letter: string) => {
    if (!isClicked(letter)) {
      clickOnLetter(letter);
    }
  };

  const isClicked = (letter: string) => {
    return lettersClicked.find((l) => letter === l);
  };

  return (
    <div className="keyboard-hangman">
      {alphabet.map((letter, index) => (
        <motion.div
          className="keybard-letter"
          key={index}
          onClick={() => onClick(letter)}
          animate={isClicked(letter) ? "clicked" : "normal"}
          transition={{ duration: 0.2 }}
          variants={variants}
          whileTap={{ scale: 0.95 }}
        >
          {letter}
        </motion.div>
      ))}
    </div>
  );
};

export default Keyboard;
