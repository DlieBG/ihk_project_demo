export interface TighteningTask {
    tighteningTaskNr: number,
    faNr: string,
    teilNr: number,
    time: Date,
    task: number,
    ready: boolean,
    success: Date | null,
    reject: Date | null
}
