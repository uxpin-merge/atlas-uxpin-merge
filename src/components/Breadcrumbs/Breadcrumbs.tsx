import React from 'react';
import BreadcrumbsM from '@atlaskit/breadcrumbs';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';

interface BreadcrumbsProps {
    defaultExpanded?: boolean;
    /**
     * Override collapsing of the nav when there are more than maxItems
     */
    isExpanded?: boolean;
    /**
     * Uses the `nav` element if true and `div` if false. Defaults to true. Use
     * to reduce noise for assistive technologies, like screen readers, on pages
     * where multiple breadcrumbs exist.
     */
    isNavigation?: boolean;
    /**
     * Set the maximum number of breadcrumbs to display. When there are more
     * than the maximum number, only the first and last will be shown, with an
     * ellipsis in between.
     */
    maxItems?: number;
    /**
     * The items to be included inside the Breadcrumbs wrapper
     */
    children?: React.ReactNode;
    /**
     * A function to be called when you are in the collapsed view and click the ellipsis.
     */
    onExpand?: (event: React.MouseEvent, analyticsEvent: UIAnalyticsEvent) => void;
    /**
     * If max items is exceeded, the number of items to show before the ellipsis
     */
    itemsBeforeCollapse?: number;
    /**
     * If max items is exceeded, the number of items to show after the ellipsis
     */
    itemsAfterCollapse?: number;
    /**
     * Additional information to be included in the `context` of analytics events
     */
    analyticsContext?: Record<string, any>;
    /**
     * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
     */
    testId?: string;
    /**
     * Text to be used as label of navigation region that wraps the breadcrumbs
     */
    label?: string;
    /**
     * Text to be used as label of ellipsis button
     */
    ellipsisLabel?: string;
}

function Breadcrumbs(props: BreadcrumbsProps) {
    return <BreadcrumbsM {...props}/>
}

export default Breadcrumbs;
