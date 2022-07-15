
export enum Role {
    NORMAL = "Normal",
    ADMIN = "Admin"
}

export type User = {
    id: string,
    name: string,
    email: string,
    password:string,
    role: Role
}


