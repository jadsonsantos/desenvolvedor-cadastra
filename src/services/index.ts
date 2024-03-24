const apiUrl = 'https://db-cadastra.vercel.app/'

const fetchProducts = async () => {
  try {
    const response = await fetch(`${apiUrl}/products`)

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export { fetchProducts }
