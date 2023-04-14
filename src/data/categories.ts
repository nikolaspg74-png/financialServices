import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação 🍝', color: '#6495ED', expense: true },
    rent: { title: 'Aluguel 🏠', color: '#FF7F50', expense: true },
    car: { title: 'Carro 🚗', color: '#DC143C', expense: true },
    card: { title: 'Cartão 💳', color: '#9932CC', expense: true },
    other: { title: 'Outros 💸', color: '#FFD700', expense: true },
    salary: { title: 'Salário 💵', color: '#6B8E23', expense: false }
}