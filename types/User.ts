interface IUser {
  _id: string;
  name: string;
  email: string;
  imageUrl: string;
  googleId: string;
  accessToken: string;
  getJWTToken: () => string;
}

export default IUser;
