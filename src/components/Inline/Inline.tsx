import React from "react";
import { Inline as InlineM } from '@atlaskit/primitives';

export interface InlineProps {
  /**
 * Elements to be rendered inside the Inline.
 */
  children: React.ReactNode;
  /**
 * Renders a separator string between each child.
 */
  separator?: string | undefined;
  /**
   * Represents the space between each child.
   */
  space?: "space.0" | "space.025" | "space.050" | "space.075" | "space.100" | "space.150" | "space.200" | "space.250" | "space.300" | "space.400" | "space.500" | "space.600" | "space.800" | "space.1000" | undefined;
  /**
   * Represents the space between rows when content wraps.
   * Used to override the `space` value in between rows.
   */
  rowSpace?: "space.0" | "space.025" | "space.050" | "space.075" | "space.100" | "space.150" | "space.200" | "space.250" | "space.300" | "space.400" | "space.500" | "space.600" | "space.800" | "space.1000" | undefined;

  /**
   * Used to align children along the main axis.
   */
  alignBlock?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  /**
   * Used to align children along the cross axis.
   */
  alignInline?: 'start' | 'center' | 'end';
  /**
   * Used to set whether children are forced onto one line or will wrap onto multiple lines.
   */
  shouldWrap?: boolean | undefined;
  /**
   * Used to distribute the children along the main axis.
   */
  spread?: "space-between" | undefined;
  /**
   * Used to set whether the container should grow to fill the available space.
   */
  grow?: 'hug' | 'fill' | undefined;
  /**
       * The DOM element to render as the Inline. Defaults to `div`.
       */
  as?: "div" | "li" | "ol" | "span" | "ul" | undefined;
  /**
   * Forwarded ref element
   */
  ref?: any;
};
/**
 * @uxpindocurl https://atlassian.design/components/primitives/inline/examples
 */
function Inline(props: InlineProps) {
  return (
    <InlineM {...props} />
  );
}

export { Inline as default };
