export const figmaMixedSymbolToString = (t: symbol | unknown) => {
  if (typeof t == "symbol") return "mixed";
  return t;
};
