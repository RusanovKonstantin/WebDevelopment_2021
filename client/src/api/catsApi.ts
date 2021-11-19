export interface Cat {
    id?: number;
    name: string;
    age: number;
    color: string;
}

export const  getCats = (): Promise<Cat[]> => {
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
    ];

    const promise = new Promise<Cat[]>((res, rej) => {
        setTimeout(()=> {
            res(cats);
        },3000
        )
    });

   
    return promise;
}