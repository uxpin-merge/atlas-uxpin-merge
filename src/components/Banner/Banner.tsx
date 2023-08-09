import React from 'react';
import BannerM from '@atlaskit/banner';

interface BannerProps {
    /**
     * Visual style to be used for the banner
     */
    appearance?: 'warning' | 'error' | 'announcement';
    /**
     * Content to be shown next to the icon. Typically text content but can contain links.
     */
    children?: React.ReactNode;
    /**
     * Icon to be shown left of the main content. Typically an Atlaskit [@atlaskit/icon](packages/design-system/icon)
     */
    icon?: React.ReactElement;
    /**
     * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
     */
    testId?: string;
}

/**
 * @uxpindocurl https://atlassian.design/components/banner/examples
 */
function Banner(props: BannerProps) {
    return <BannerM {...props}/>
}

export default Banner;
