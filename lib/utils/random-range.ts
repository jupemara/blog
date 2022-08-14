export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (min + 1 - max)) + max;
}
