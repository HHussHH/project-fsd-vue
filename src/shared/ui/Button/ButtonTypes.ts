export type ButtonVariants =
  | "clear"
  | "clearInverted"
  | "outline"
  | "background"
  | "backgroundInverted";
export type ButtonSize = "size_m" | "size_l" | "size_xl";
export interface Props {
  className?: string;
  theme?: ButtonVariants;
  size?: ButtonSize;
  square?: boolean;
}
