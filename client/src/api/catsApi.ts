export interface Cat {
    id?: number;
    name: string;
    age: number;
    color: string;
}

export const  getCats = (): Cat[] => {
    const cats:Cat[] = [
        {
            name: "Murzik",
            age: 1,
            color: "groo"
        },
        {
            name: "Murka",
            age: 5,
            color: "Three Color"
        }
    ]
    return cats;
}