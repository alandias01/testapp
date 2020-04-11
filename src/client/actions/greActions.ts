export enum greWordsActionEnum {
  GET_WORDS = "GET_WORDS",
  DELETE_WORDS = "DELETE_WORDS",
}

export interface IWord {
  word: string;
  definition: string;
  partOfSpeech: string;
}

export interface IWordsState {
  words: IWord[];
}

export interface IRootState {
  gre: IWordsState;
}

interface IGetWordsAction {
  type: greWordsActionEnum.GET_WORDS;
}

interface IDeleteWordsAction {
  type: greWordsActionEnum.DELETE_WORDS;
  payload: IWord[];
}

export type TWordActions = IGetWordsAction | IDeleteWordsAction;

export const getWords = (): TWordActions => ({
  type: greWordsActionEnum.GET_WORDS,
});

export const deleteWords = (words: IWord[]): TWordActions => ({
  type: greWordsActionEnum.DELETE_WORDS,
  payload: words,
});
