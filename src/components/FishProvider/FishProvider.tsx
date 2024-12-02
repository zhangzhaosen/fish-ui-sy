import React from "react";
import { Theme, webLightTheme } from "zhangzhaohong9-fish-ui-sy";
import { useStyles } from "./useStyles";

type ThemeContextValue = Partial<Theme> | undefined;

const ThemeContext = React.createContext<ThemeContextValue>(undefined);

export type FishProviderProps = React.HTMLAttributes<
HTMLDivElement
> & {
  theme?: ThemeContextValue;
};
export const FishProvider = ({
  className,
  theme = webLightTheme,
  children,
  ...restProps
}: FishProviderProps) => {
  const cls = useStyles({ className, theme });

  return (
    <ThemeContext.Provider value={theme}>
    <div {...restProps} className={cls}>
      {children}
    </div>
  </ThemeContext.Provider>
  );
};
