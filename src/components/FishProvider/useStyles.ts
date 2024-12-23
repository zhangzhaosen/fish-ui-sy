import {makeStyles, mergeClasses} from '@griffel/react'
import {FishProviderProps, tokens} from 'zhangzhaohong9-fish-ui-sy'
import {useThemeStyleTag} from './useThemeStyleTag'
const FishProviderClassNames = {
  root: 'fish-ui-FishProvider'
}
const useBaseStyles = makeStyles({
  root:{
    color: tokens.colorNeutralForeground1, 
    backgroundColor: tokens.colorNeutralBackground1, 
    textAlign: 'left'
  }
})

export const useStyles = ({
  className, 
  theme
}: Partial<FishProviderProps>)=>{
  const baseStyles = useBaseStyles()
  // 根据theme创建cssrules
 const {themeClassName} = useThemeStyleTag({theme})
  return mergeClasses(FishProviderClassNames.root, baseStyles.root, 
    themeClassName,
     className)
}