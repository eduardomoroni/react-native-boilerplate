export type StateType = number;
export type ActionType = ActionWithNoPayload;
export type FunctionalReducerConfigType = {
  reducers: ReducerType,
  initialState: number,
};
export type ReducerType = {
  [string]: (number) => number,
};
export type ActionWithNoPayload = {
  type: string,
};
