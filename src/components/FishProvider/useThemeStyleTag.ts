import React from "react";
import { FishProviderProps } from "./FishProvider"
import { createCSSRuleFromTheme } from "./createCSSRuleFromTheme";

// 生成style标签,id
const createStyleTag = (
  target: Document | undefined,
  elementAttributes: Record<string, string>
) => {
  if (!target) {
    return undefined;
  }

  const tag = target.createElement("style");

  Object.keys(elementAttributes).forEach((attrName) => {
    tag.setAttribute(attrName, elementAttributes[attrName]);
  });

  target.head.appendChild(tag);

  return tag;
};

const insertSheet = (tag: HTMLStyleElement, rule: string) => {
  const sheet = tag.sheet;

  if (sheet) {
    if (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }

    sheet.insertRule(rule);
  }
};

export const useThemeStyleTag = ({theme}: Partial<FishProviderProps>)=>{
  const generatedId = React.useId(); 
  const escapedId = React.useMemo(()=>{
    return generatedId.replace(/:/g, "")
  }, [generatedId])

  const themeClassName = 'fish-ui-FishProvider' + escapedId
  //console.log("theme", theme)
  // 根据theme生成css规则
  const rule = React.useMemo(()=>{
    return createCSSRuleFromTheme(`.${themeClassName}`, theme)
  }, [theme, themeClassName]) 

  console.log("%c [rule]-49", 
    "font-size: 13px; background:pink; color: #bf2c9f;",
    rule
  )

// 生成style标签
const styleTag = React.useRef<HTMLStyleElement | undefined | null>(null);
React.useLayoutEffect(() => {
  styleTag.current = createStyleTag(document, { id: themeClassName });
  if (styleTag.current) {
    insertSheet(styleTag.current, rule);
  }

  return () => {
    styleTag.current?.remove();
  };
}, [themeClassName, rule]);

  return {themeClassName}
}