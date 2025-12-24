export interface Information {
    departureAddress: string;
    arrivalAddress: string;
    dossierNumber: string;
    name: string;
    phoneNumber: string;
}

export interface Mission {
    id: number;
    date: string;
    informations: Information;
}