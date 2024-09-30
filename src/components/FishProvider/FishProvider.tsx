import React from "react"
import { Theme, webLightTheme } from "fish-ui-sy"
import { useStyles } from "./useStyles"


type ThemeContextValue = Partial<Theme> | undefined

const ThemeContxt = React.createContext<ThemeContextValue>(undefined)

export type FishProviderProps = React.HTMLAttributes<React.ChildContextProvider<ThemeContextValue> > &{
  theme?: ThemeContextValue
}
export const FishProvider = ({className, 
  theme =  webLightTheme,
  children,   ...restProps}: FishProviderProps)=>{
  
  const cls = useStyles({className, theme})
  
  return <ThemeContxt.Provider value={theme} {...restProps}>
    <div className={cls}>
    {children}
      </div>
  </ThemeContxt.Provider>
}