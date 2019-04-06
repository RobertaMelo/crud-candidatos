export interface CandidateDTO {
    id: number;
    full_name: string;
    cpf: number;
    rg: number;
    birth_date: Date;
    phone: number;
    username: string;
    email: string;
    password: string;
    is_active: boolean;
}