
interface IPdfFilesBaseRepo<T, U> {
  count(): Promise<number>
  findAll(limit: number, startIndex: number): Promise<U[]>
  findById(): Promise<U | null>
  create(data: T): Promise<U>
  findByIdAndUpdate(id: string, data: T): Promise<U | null>
  findByIdAndDelete(id: string): Promise<U | null>
}

export default IPdfFilesBaseRepo 