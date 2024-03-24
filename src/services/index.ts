const apiUrl = process.env.REACT_APP_API_URL

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
