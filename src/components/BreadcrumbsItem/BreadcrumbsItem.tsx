import React from 'react';
import { BreadcrumbsItem as BreadcrumbsItemM } from '@atlaskit/breadcrumbs';

export interface BreadcrumbsItemProps {
    /**
     * The url or path which the breadcrumb should act as a link to.
     */
    href?: string;
    /**
     * An icon to display before the breadcrumb.
     */
    iconBefore?: React.ReactChild;
    /**
     * An icon to display after the breadcrumb.
     */
    iconAfter?: React.ReactChild;
    /**
     * Handler to be called on click. *
     */
    onClick?: (event: React.MouseEvent) => void;
    /**
     * The text to appear within the breadcrumb as a link.
     */
    text: string;
    /**
     * The maximum width in pixels that an item can have before it is truncated.
     * If this is not set, truncation will only occur when it cannot fit alone on a
     * line. If there is no truncationWidth, tooltips are not provided on truncation.
     */
    truncationWidth?: number;
    target?: '_blank' | '_parent' | '_self' | '_top' | '';
    /**
     * Provide a custom component to use instead of the default button.
     *  The custom component should accept a className prop so it can be styled
     *  and possibly all action handlers
     */
    component?: React.ClassType<any, any, any>;
    /**
     * Additional information to be included in the `context` of analytics events
     */
    analyticsContext?: Record<string, any>;
    /**
     * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
     * In case of `testId` passed through EllipsisItem, the element will be identified like this: 'testId && `${testId}--breadcrumb-ellipsis'.
     * This can be used to click the elements when they are collapsed.
     */
    testId?: string;
    /**
     * A function to be called when a truncated breadcrumb item's tooltip is shown
     */
    onTooltipShown?: () => void;
}


function BreadcrumbsItem(props: BreadcrumbsItemProps) {
    return <BreadcrumbsItemM {...props}/>
}

export default BreadcrumbsItem;
