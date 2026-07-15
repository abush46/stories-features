export function dualDate(value: Date | string) {
  const date = new Date(value)
  const gregorian = new Intl.DateTimeFormat('en-GB', { day:'numeric', month:'short', year:'numeric' }).format(date)
  let ethiopian = ''
  try { ethiopian = new Intl.DateTimeFormat('am-ET-u-ca-ethiopic', { day:'numeric', month:'long', year:'numeric' }).format(date) } catch { ethiopian = gregorian }
  return { gregorian, ethiopian }
}
