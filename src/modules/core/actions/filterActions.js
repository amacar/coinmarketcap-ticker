export const SELECT_FIAT = 'SELECT_FIAT'
export const SELECT_LIMIT = 'SELECT_LIMIT'

export const selectFiat = (fiat) => ({
  type: SELECT_FIAT,
  fiat
})

export const selectLimit = (limit) => ({
  type: SELECT_LIMIT,
  limit
})
