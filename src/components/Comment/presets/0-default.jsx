import React from 'react';
import Comment from '../Comment';
import Avatar from '../../Avatar/Avatar';

const sampleAvatar = 'https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg';

export default (
    <Comment
        uxpId='Comment'
        avatar={<Avatar uxpId="avatar" name="Scott Farquhar" src={sampleAvatar} />}
        content={'Lorem ipsum dolor sit amet'}
    />
)