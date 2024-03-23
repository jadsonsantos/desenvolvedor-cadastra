const formatCurrency = (value: number, currency: string = 'BRL'): string => {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency,
  })
}

export { formatCurrency }
