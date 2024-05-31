export class Products {
    constructor(
        public id: number,
        public title: string,
        public image: File | null,
        public price: number,
        public details: string
    ) {}
}
