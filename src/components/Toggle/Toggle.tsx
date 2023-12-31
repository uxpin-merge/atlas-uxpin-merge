import React from "react";
import ToggleM from '@atlaskit/toggle';

export interface ToggleProps {
  /**
   * Text to be used as aria-label of toggle component.
   *
   * Use when there is not visible label that you can pair toggle with
  */
  label?: string;
  /**
   * Whether the toggle is initially checked or not
   * After initial mount whether the component is checked or not is
   * controlled by the component
  */
  defaultChecked?: boolean;
  /**
   * Toggle size.
   */
  size?: 'regular' | 'large';
  /**
   * If defined it takes precedence over defaultChecked and Toggle acts
   * as a controlled component.
   *
   * You can provide a onChange function to be notified of checked value changes
   * @uxpinbind onChange 0.target.checked
   */
  isChecked?: boolean;
  /**
     * If the toggle is disabled or not. This prevents any interaction.
     */
  isDisabled?: boolean;
  /**
   * Use a pairing label with your toggle using `id` and `htmlFor` props to set the relationship.
   * For more information see [labels on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).
   */
  id?: string;
  /**
   * Descriptive name for value property to be submitted in a form.
   */
  name?: string;
  /**
   * Value to be submitted in a form.
   */
  value?: string;
  /**
   * Handler to be called when toggle is unfocused.
   */
  onBlur?: () => void;
  /**
   * Handler to be called when native 'change' event happens internally.
   */
  onChange?: () => void;
  /**
   * Handler to be called when toggle is focused.
   */
  onFocus?: () => void;
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.
   * We have added 2 `testIds`:
   * - `testId` that targets the Label component to interact with the component.
   * - `{testId}--input` to check if the toggle has been checked/unchecked.
   */
  testId?: string;
  /**
   * Additional information to be included in the `context` of analytics events that come from button
   */
  analyticsContext?: Record<string, any>;



};


function Toggle(props: ToggleProps) {
  return (
    <ToggleM {...props} key={Math.random()} />
  );
}

export { Toggle as default };
