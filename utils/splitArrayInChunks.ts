function splitArrayInChunks<P>(arr: P[], chunkSize: number) {
  return arr
    .map((_, i) => {
      return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
    })
    .filter((e) => {
      return e;
    });
}

export default splitArrayInChunks;
