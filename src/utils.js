/** Join class names for Tailwind. */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
