export type ACtypes = ReturnType<typeof increaseAC> | ReturnType<typeof resetAC>;

export const increaseAC = () => {
  return {
    type: "INCREASE" as const,
  } as const;
};

export const resetAC = () => {
  return {
    type: "RESET" as const,
  } as const;
};