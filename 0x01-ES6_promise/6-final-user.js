import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  const [userResult, photoResult] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return [
    { status: userResult.status, value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason },
    { status: photoResult.status, value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason },
  ];
};

export default handleProfileSignup;
