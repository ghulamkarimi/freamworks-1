export interface IBlog {
    _id: string;
    userId: string,
    title: string;
    content: string;
    imgUrl: string;
    reactions: Record<string, number>;
    date: string;

}
export interface IUser {
    _id: string;
    firstName: string,
    lastName: string;
    email: string;
    photo: string;
}