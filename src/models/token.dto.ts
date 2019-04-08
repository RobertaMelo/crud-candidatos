export interface TokenDTO {
    expires_in: number;
    token_type: string;
    access_token: string;
    refresh_token: string;
    scope: string;
}