import { getRss } from '~/server/utils/getRss'

export default defineEventHandler(async () => {
  try {
    return await getRss()
  }
  catch (error) {
    console.error('Ошибка проксирования:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Ошибка при получении данных',
    })
  }
})
