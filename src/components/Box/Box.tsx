import React from "react";
import { Box as BoxM, xcss } from '@atlaskit/primitives';
import { BackgroundColor, type Space } from '@atlaskit/primitives/dist/types/xcss/style-maps.partial';

export interface BoxProps {
      /**
     * The DOM element to render as the Box. Defaults to `div`.
     */
      as?: "div" | "li" | "ol" | "span" | "ul" | undefined;
      /**
       * Elements to be rendered inside the Box.
       */
      children?: React.ReactNode;
      /**
       * Token representing background color with a built-in fallback value.
       */
      backgroundColor?: BackgroundColor;
      /**
       * Tokens representing CSS shorthand for `paddingBlock` and `paddingInline` together.
       *
       * @see paddingBlock
       * @see paddingInline
       */
      padding?: Space;
      /**
       * Tokens representing CSS shorthand `paddingBlock`.
       *
       * @see paddingBlockStart
       * @see paddingBlockEnd
       */
      paddingBlock?: Space;
      /**
       * Tokens representing CSS `paddingBlockStart`.
       */
      paddingBlockStart?: Space;
      /**
       * Tokens representing CSS `paddingBlockEnd`.
       */
      paddingBlockEnd?: Space;
      /**
       * Tokens representing CSS shorthand `paddingInline`.
       *
       * @see paddingInlineStart
       * @see paddingInlineEnd
       */
      paddingInline?: Space;
      /**
       * Tokens representing CSS `paddingInlineStart`.
       */
      paddingInlineStart?: Space;
      /**
       * Tokens representing CSS `paddingInlineEnd`.
       */
      paddingInlineEnd?: Space;

      /**
       * Forwarded ref element
       */
      // ref?: ComponentPropsWithRef<T>['ref'];
};
/**
 * @uxpindocurl https://atlassian.design/components/primitives/box/examples
 */
function Box(props: BoxProps) {
  return (
    <BoxM {...props} />
  );
}

export { Box as default };
