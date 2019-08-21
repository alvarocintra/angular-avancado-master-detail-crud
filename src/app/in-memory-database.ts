import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';


export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {
                id: 1,
                name: 'Lazer',
                description: 'Cinema, parques, praia, etc'
            },
            {
                id: 2,
                name: 'Moradia',
                description: 'Pagamentos de contas da casa'
            },
            {
                id: 3,
                name: 'Saúde',
                description: 'Plano de Saúde e remédios'
            },
            {
                id: 4,
                name: 'Salário',
                description: 'Recebimento de salário'
            },
            {
                id: 5,
                name: 'Freelas',
                description: 'Trabalhos como freelancer'
            }
        ];

        const entries: Entry[] = [
            {
                id: 1,
                name: 'Conta de Luz',
                description: 'Conta de luz paga todo mês',
                categoryId: categories[1].id,
                category: categories[1],
                paid: true,
                date: '14/05/2019',
                amount: '150,00',
                type: 'expense'
            } as Entry,
            {
                id: 2,
                name: 'Boletos',
                description: 'Conta de luz paga todo mês',
                categoryId: categories[2].id,
                category: categories[2],
                paid: false,
                date: '31/08/2019',
                amount: '850,00',
                type: 'expense'
            } as Entry,
            {
                id: 3,
                name: 'Salário',
                description: 'Salário recebido todo mês',
                categoryId: categories[3].id,
                category: categories[3],
                paid: true,
                date: '14/05/2019',
                amount: '150,00',
                type: 'revenue'
            } as Entry,
            {
                id: 4,
                name: 'Freelas',
                description: 'Trabalho por fora',
                categoryId: categories[1].id,
                category: categories[1],
                paid: false,
                date: '14/05/2019',
                amount: '150,00',
                type: 'revenue'
            } as Entry,
            {
                id: 5,
                name: 'Conta de Luz',
                description: 'Conta de luz paga todo mês',
                categoryId: categories[1].id,
                category: categories[1],
                paid: true,
                date: '14/05/2019',
                amount: '150,00',
                type: 'expense'
            } as Entry
        ];

        return { categories, entries };
    }
}
