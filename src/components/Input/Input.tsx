import React, { useState } from "react";
import type { InputProps } from "./Input.types";
import type { ForwardRefComponent } from "../../utilities";
import { mergeClasses } from "@griffel/react";
import {
  inputClassNames,
  useContentClassName,
  useContentStyles,
  useInputClassName,
  useInputElementStyles,
  useRootClassName,
  useRootStyles,
} from "./useInputStyles.styles";
import { useControllableState, useEventCallback } from "../../utilities/hooks";

export const Input =  React.forwardRef<HTMLSpanElement,  InputProps>(
  (props, ref) => {
    const {
      type = "text",
      size = "medium",
      appearance = "outline",
      defaultValue,

      value: _value ,
      onChange,
      contentBefore,
      contentAfter,
      disabled,
      className,
      ...restProps
    } = props;
    const invalid = props["aria-invalid"] === "true";

    const filled = appearance.includes("filled");

    const contentStyles = useContentStyles();

    const contentClasses = [
      useContentClassName(),
      disabled && contentStyles.disabled,
      contentStyles[size],
    ];

    const rootStyles = useRootStyles();

    const inputStyles = useInputElementStyles();

    //const [value, setValue] = useState(_value)
    const [value, setValue] = useControllableState({
      defaultState: defaultValue, 
      state: _value, 
      initialState: ''
    })

    return (
      <span
        className={mergeClasses(
          inputClassNames.root,
          useRootClassName(),
          rootStyles[size],
          !!contentBefore && rootStyles[`${size}WithContentBefore`],
          !!contentAfter && rootStyles[`${size}WithContentAfter`],
          rootStyles[appearance],
          !disabled &&
            (appearance == "outline" || appearance == "underline") &&
            rootStyles[`${appearance}Interactive`],
          !disabled && filled && rootStyles[`filledInteractive`],
          !disabled && filled && rootStyles.filled,
          invalid && rootStyles.invalid,
          disabled && rootStyles.disabled,
          className
        )}
      >
        {contentBefore && (
          <span
            className={mergeClasses(
              inputClassNames.contentBefore,
              ...contentClasses
            )}
          >
            {contentBefore}
          </span>
        )}
        <input
          {...restProps}
          disabled = {disabled}
          type={type}
          ref={ref as React.Ref<HTMLInputElement>}
          className={mergeClasses(
            inputClassNames.input,
            useInputClassName(),
            inputStyles[size],
            !!contentBefore && inputStyles[`${size}WithContentBefore`],
            !!contentAfter && inputStyles[`${size}WithContentAfter`],
            disabled && inputStyles.disabled
          )}

          value={value}
          //defaultValue={defaultValue}
          onChange = {useEventCallback((event)=>{
            const newValue = event.target.value
            onChange?.(event, {value: newValue})
            setValue(newValue)
          })}
        />
        {contentAfter && (
          <span
            className={mergeClasses(
              inputClassNames.contentAfter,
              ...contentClasses
            )}
          >
            {contentAfter}
          </span>
        )}
      </span>
    );
  }
);
