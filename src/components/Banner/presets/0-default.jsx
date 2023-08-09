import React from 'react';
import Banner from '../Banner';
import WarningIcon from '../../WarningIcon/WarningIcon';

export default (
    <Banner 
        uxpId='Banner' 
        appearance="warning"
        icon={<WarningIcon uxpId="warning-icon" label="" secondaryColor="inherit" />}>
        Payment details needed. To stay on your current plan after your trial
        ends, add payment details by June 30, 2020.
    </Banner>
)