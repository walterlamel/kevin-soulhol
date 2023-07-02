/**
 * 
 * Game : Hangman
 * 
 * Le joueur doit trouver le mot inconnu en proposant des lettres.
 * 
 */


import { useEffect, useState } from "react";
import listGames from "../../../data/listeGames";
import WindowGame from "../WindowGame";
import Keyboard from "./components/Keyboard";
import UnknownWord from "./components/UnknownWord";
import LifeCounter from "./components/LifeCounter";
import { AnimatePresence, motion } from "framer-motion";
import { AllowedVariants, IVariant, IWords, IWord } from "./types";

const variantes : IVariant = {
    normal : {
        life : 7,
        word : 1,
        name: 'Simple'
    },
    hard : {
        life : 2,
        word : 1,
        name : 'Hard'
    },
    group : {
        life : 3,
        word : 4,
        name : 'Groupe de mots'
    },

}


const Hangman = ( ) => {    
    const [variant, setVariant ] = useState<AllowedVariants>('normal')
    const [wordsToFind, setWordsToFind ] = useState<IWords>([]);
    const [lettersFind, setLettersFind ] = useState<string[]>([]);
    const [ lettersClicked, setLettersClicked ] = useState<string[]>([])
    const [life, setLife ]= useState<number>(variantes[variant].life);
    const [score, setScore ]= useState<number>(0);
    const [isLoose, setIsLoose ] = useState<boolean>(false);
    const [isWin, setIsWin ] = useState<boolean>(false);


    const getWord = async () => {
        fetch(`https://trouve-mot.fr/api/random/${variantes[variant].word}`)
            .then((response) => response.json())
            .then((words) => {
                    let res = words.map( ( word : any ) => {
                        return {
                            word : parseWord(word.name),
                            wordSplit : parseWord(word.name).split(''),
                            lettersToFind : parseWord(word.name)
                        }
                    })
                    setWordsToFind(res)
        })
    }

    useEffect(() => {
        reloadGame()
    }, [])

    const parseWord = (str : string) => {
        return str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toUpperCase()
    }

    const verifLoose = () => {
        if(life <= 0){
            setIsLoose(true);
        }
    }

    const verifWin = ( cpWordsToFind : IWords ) => {
        if(life > 0){
            let findedWord = 0;
            cpWordsToFind.forEach(wordToFind => {
                if(wordToFind.lettersToFind.length === 0){
                    findedWord++
                }
            })
            
            if(findedWord === wordsToFind.length){
                setIsWin(true)
                setScore(score + 1)
            }
        }
    }

    const clickOnLetter = (letter : string) => {
        if(wordsToFind){
            setLettersClicked([...lettersClicked, letter]);
            let res : string | undefined = undefined;
            let cpWordsToFind = [...wordsToFind]
            cpWordsToFind = wordsToFind.map((wordToFind : IWord) => {
                if(res === undefined){
                    res = wordToFind.wordSplit.find(l => l === letter);
                }
                return {...wordToFind, lettersToFind : wordToFind.lettersToFind.replaceAll(letter, '') }
            })

            if(!res){
                setLife(life - 1);
            } else {
                setLettersFind([...lettersFind, letter]);
            }

            verifLoose();
            verifWin(cpWordsToFind);
            setWordsToFind(cpWordsToFind);
        }
    }

    const reloadGame  = () => {
        setLettersFind([]);
        setLettersClicked([]);
        setLife(variantes[variant].life);
        setIsLoose(false);
        setIsWin(false);
        getWord();
    }

    useEffect(() => {
        reloadGame();
    }, [variant])

    return (
        <WindowGame classContain="game-hangman" gameName={listGames[2].name} desc={listGames[2].desc}>
            <AnimatePresence>
            {isLoose && (
                <motion.div className="screen-loose screen"
                 initial={{ 
                    opacity : 1,
                    scale : 0
                 }} 
                 animate={ { 
                    opacity : 1,
                    scale : 1
                } }
                 exit={ { opacity : 0 }}
                 >
                    <h3>Perdu !</h3>
                    <p>la réponse était <br/> {Object.keys(wordsToFind).map((key, index) => (
                        <span key={index}>{wordsToFind[key as any].word}</span>
                    ))}</p>
                    <motion.button onClick={() => reloadGame()} whileHover={{ scale : 1.1 }} whileTap={{ scale: 0.9 }}>Play Again</motion.button>
                </motion.div>
            )}
            {isWin && (
                <motion.div className="screen-win screen"
                 initial={{ 
                    opacity : 1,
                    scale : 0
                 }} 
                 animate={ { 
                    opacity : 1,
                    scale : 1
                } }
                 exit={ { opacity : 0 }}
                 >
                    <h3>Gagné !</h3>
                    
                    <p>Vous enchainez {score} victoires !</p>
                    <motion.button onClick={() => reloadGame()} whileHover={{ scale : 1.1 }} whileTap={{ scale: 0.9 }}>Play Again</motion.button>
                </motion.div>
            )}
            </AnimatePresence>
            <UnknownWord wordsToFind={wordsToFind} lettersFind={lettersFind} />
            <LifeCounter life={life} />
            <Keyboard lettersClicked={lettersClicked} clickOnLetter={clickOnLetter} />
            <div className="selector-variant">
                <p>Mode de jeu : </p>
                {Object.keys(variantes).map( (key, index) => (
                    <div key={index} onClick={() => setVariant(key as AllowedVariants)} data-selected={key === variant}>{variantes[key as AllowedVariants].name}</div>
                ))}
            </div>
        </WindowGame>
    )
}

export default Hangman;