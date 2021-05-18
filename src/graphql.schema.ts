/* tslint:disable */
export class Photo {
    url?: string;
}

export abstract class IQuery {
    abstract user(id?: number): User | Promise<User>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class User {
    id: string;
    name?: string;

    abstract photos(page?: number): Photo | Promise<Photo>;
}
