import React from 'react';
import { Code as CodeM } from '@atlaskit/code';

export interface CodeProps {
    /**
     * A unique string that appears as a data attribute `data-testid`
     * in the rendered code. Serves as a hook for automated tests.
     */
    testId?: string;
    /**
     * Content to be rendered in the inline code block.
     */
    children?: React.ReactNode;
    /**
     * When set to `false`, disables code decorating with bidi warnings. Defaults to `true`.
     */
    codeBidiWarnings?: boolean;
    /**
     * Label for the bidi warning tooltip.
     *
     * Defaults to `Bidirectional characters change the order that text is rendered.
     * This could be used to obscure malicious code.`
     */
    codeBidiWarningLabel?: string;
    /**
     * Sets whether to render tooltip with the warning or not. Intended to be
     * disabled when used in a mobile view, such as in the editor via mobile
     * bridge, where the tooltip could end up being cut off or otherwise not work
     * as expected. Defaults to `true`.
     */
    codeBidiWarningTooltipEnabled?: boolean;
}

function Code(props: CodeProps) {
    return (
    <div style={{display: 'grid'}}>
      <CodeM {...props}/>
    </div>
    )
}

export default Code;
