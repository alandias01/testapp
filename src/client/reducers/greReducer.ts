import { IWordsState, TWordActions } from "./../actions/greActions";
import { greWordsActionEnum } from "../actions/greActions";
import { produce } from "immer";
import { IWord } from "./../actions/greActions";

const initialState: IWordsState = {
  words: [],
};

export const greReducer = (
  state: IWordsState = initialState,
  action: TWordActions
): IWordsState => {
  let nextState: IWordsState;

  switch (action.type) {
    case greWordsActionEnum.GET_WORDS:
      const w: IWord = { word: "a", definition: "f", partOfSpeech: "n" };
      nextState = produce(state, (draft) => {
        draft.words.push(w);
      });

      return nextState;

    case greWordsActionEnum.DELETE_WORDS:
      nextState = produce(state, (d) => {
        d.words.filter((x) => x.word !== action.payload[0].word);
      });
      return nextState;

    default:
      return state;
  }
};
