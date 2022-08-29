import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    other: { title: 'Outros', color: 'yellow', expense: true },

    salary: { title: 'Salário', color: 'green', expense: false }
}