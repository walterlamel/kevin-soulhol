import { useEffect, useState } from "react";
import { IWords } from "../types";

const UnknownWord = ({
  wordsToFind,
  lettersFind,
}: {
  wordsToFind: IWords;
  lettersFind: string[];
}) => {
  const displayedWord = (word: string) => {
    if (word) return word.split("");
    return [];
  };

  return (
    <div className="unknownWord-hangman">
      {Object.keys(wordsToFind).map((key, index) => (
        <div className="word">
          {displayedWord(wordsToFind[key as any].word).map((letter, index) => (
            <div className="letter" key={index}>
              {lettersFind.find((l) => l === letter) ? letter : "_"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UnknownWord;

/*

   {displayedWord().map((letter, index) => (
                <div className="letter"  key={index}>{lettersFind.find(l => l === letter) ? letter : '_'}</div>
            ))}

            */
