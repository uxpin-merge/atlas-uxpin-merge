import { PrimaryButton as PrimaryButtonM, PrimaryButtonProps } from '@atlaskit/atlassian-navigation';

/**
 * @uxpindocurl https://atlassian.design/components/button/examples
 */
function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <PrimaryButtonM {...props} />
  );
}

export { PrimaryButton as default };
