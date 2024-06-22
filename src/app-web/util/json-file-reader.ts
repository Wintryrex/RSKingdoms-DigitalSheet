const jsonFileReader = async <T>(filename: string): Promise<T | undefined> => {
  return (await fetch(filename)).json()
}

export default jsonFileReader
