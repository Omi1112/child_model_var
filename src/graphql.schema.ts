
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract user(id?: number): User | Promise<User>;
}

export class User {
    id: string;
    name?: string;
    photos?: Photo[];
}

export class Photo {
    url?: string;
}
