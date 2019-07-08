export class Quotes {
    public showDescription; boolean;
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public publisher: string,
        public completeDate: Date,
        public upVote: number,
        public dnVote: number) {
        this.showDescription = false;

    }
}