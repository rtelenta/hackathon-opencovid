function kFormatter(num: number) {
  return Math.abs(num) > 999
    ? Math.sign(num) * ((Math.abs(num) / 1000) as any).toFixed(1) + "mil"
    : Math.sign(num) * Math.abs(num);
}

export default kFormatter;
