import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title: string;
    customStyles?: string;
    type? : 'button' | 'submit' | 'reset';
    handleClick? : MouseEventHandler<HTMLButtonElement>
}

export interface brandProps {
    brand: string;
    setBrand: (brand: string) => void
}

export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number
}

export interface filterProps {
    brand: string;
    model: string;
    fuel: string;
    year: number;
    limit: number;
}

export interface customFilterProps {
    title: string;
    options: [{
        title: string;
        value: string;
    }]
}

export interface showMoreProps {
    pageNumber: number;
    isNext: boolean
}