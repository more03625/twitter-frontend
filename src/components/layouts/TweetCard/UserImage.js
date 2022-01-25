import React from 'react';
import defaultUserImage from '../../../assets/images/user/default.jpg'
const UserImage = (props) => {
  const { userImage } = props;
  return (
    <img className="border rounded-circle" src={!userImage ? (defaultUserImage) : (userImage)} width={50} alt="Laura Willson" />
  );
};

export default UserImage;
