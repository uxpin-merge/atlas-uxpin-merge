import React from "react";
import { Stack as StackM } from '@atlaskit/primitives';

export interface StackProps {
  /**
 * Elements to be rendered inside the Stack.
 */
  children: React.ReactNode;
  /**
 * Represents the space between each child.
 */
  space?: "space.0" | "space.025" | "space.050" | "space.075" | "space.100" | "space.150" | "space.200" | "space.250" | "space.300" | "space.400" | "space.500" | "space.600" | "space.800" | "space.1000" | undefined;
  /**
   * Used to align children along the main axis.
   */
  alignBlock?: 'start' | 'center' | 'end' | undefined;
  /**
   * Used to align children along the cross axis.
   */
  alignInline?: 'start' | 'center' | 'end' | undefined;
  /**
   * Used to distribute the children along the main axis.
   */
  spread?: "space-between" | undefined;
  /**
   * Used to set whether the container should grow to fill the available space.
   */
  grow?: 'hug' | 'fill' | undefined;
  /**
    * The DOM element to render as the Stack. Defaults to `div`.
    */
  as?: "div" | "ol" | "span" | "ul" | undefined;
  /**
   * Forwarded ref element
   */
  ref?: any;
};
/**
 * @uxpindocurl https://atlassian.design/components/primitives/stack/examples
 */
function Stack(props: StackProps) {
  return (
    <StackM {...props} />
  );
}

export { Stack as default };
