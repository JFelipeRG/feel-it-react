import moment from 'moment'

function getDiffTime (fecha) {
  const data = moment(new Date(fecha))
  const actualData = moment(new Date())

  const diff = moment.duration(actualData.diff(data))

  if (diff.as('years').toFixed() > 0) return data.date() + ' ' + getMonthString(data.month()) + '. ' + data.year()

  else if (diff.as('days').toFixed() >= 7) return data.date() + ' ' + getMonthString(data.month()) + '.'

  else if (diff.as('days').toFixed() > 0) return data.day() + 'd'

  else if (diff.as('hours').toFixed() > 0) return diff.as('hours').toFixed() + 'h'

  else if (diff.as('minutes').toFixed() > 0) return diff.as('minutes').toFixed() + 'min'

  else return diff.as('seconds').toFixed() + 's'
}

function getMonthString (index) {
  const months = ['Enero', 'Feb', 'Marzo', 'Abril', 'Mayo', 'Jun', 'Jul', 'Agosto', 'Sep', 'Oct', 'Nov', 'Dic']

  return months[index]
}

export { getDiffTime }