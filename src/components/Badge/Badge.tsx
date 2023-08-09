import React from 'react';
import BadgeM from '@atlaskit/badge';
import { BadgeProps } from '@atlaskit/badge/types';

function Badge(props: BadgeProps) {
    return (
    <div style={{display: 'grid'}}>
      <BadgeM {...props}/>
    </div>
    )
}

export default Badge;
