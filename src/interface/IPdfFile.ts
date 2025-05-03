interface IPdfFile {
  name: string
  file: {
    data: Buffer
    contentType: string
  }
  createdAt: string
  updatedAt: string
}

export default IPdfFile