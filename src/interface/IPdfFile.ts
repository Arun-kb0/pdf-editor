interface IPdfFile {
  _id: string
  name: string
  file: {
    data: Buffer
    contentType: string
  }
  createdAt: string
  updatedAt: string
}

export default IPdfFile