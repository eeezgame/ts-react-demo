export enum Sex {
    men= 0,
    women= 1
}

export interface UserListResponse {
    uid: string, 
    name: string, 
    sex: Sex
}