/* -- https://www.npmjs.com/package/uuid#uuidv5name-namespace-buffer-offset - */
import { v4 as uuidv4 } from 'uuid'

export const employeesArray = [
    {
        id: uuidv4(),
        name: 'Anatolii Mikhov',
        salary: 1200,
        increase: true,
        liked: true,
    },
    {
        id: uuidv4(),
        name: 'One Doe',
        salary: 3300,
        increase: false,
        liked: false
    },
    {
        id: uuidv4(),
        name: 'Kite White',
        salary: 5000,
        increase: false,
        liked: false,
    },
]
