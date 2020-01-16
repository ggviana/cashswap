import numeral from 'numeral'

export default function formatNumber (value) {
  return numeral(value).format('0.00[00]')
}
