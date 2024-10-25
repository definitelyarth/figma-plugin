export type Size = {
  name: string;
  imageData: Uint8Array;
};

export type Variant = {
  name: string;
  sizes: Size[];
};
