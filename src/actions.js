export const dec = () => ({type: `DEC`});

export const inc = () => ({type: `INC`});

export const rndDec = () => ({
  type: `RND_DEC`,
  payload: Math.floor(Math.random() * 11),
});

export const rndInc = () => ({
  type: `RND_INC`,
  payload: Math.floor(Math.random() * 11),
});