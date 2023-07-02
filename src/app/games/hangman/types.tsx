export type AllowedVariants = "normal" | "hard" | "group";

interface IVariante {
  life: number;
  word: number;
  name: string;
}

export type IVariant = {
  [key in AllowedVariants]: IVariante;
};

export interface IWord {
  word: string;
  wordSplit: string[];
  lettersToFind: string;
}

export type IWords = IWord[];
