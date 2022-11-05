export type Roles = '1' | '2'  | '3';

export interface ResponseI{
    message: string;
    token: string;
    userId: number;
    rol: Roles;
    name: string;
}