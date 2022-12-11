class PS {
    private static count: number = 0;
    public static getCount(): number {
        return PS.count;
    }
}

console.log(PS.getCount());

