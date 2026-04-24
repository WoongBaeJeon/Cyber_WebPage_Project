export const SORT_DROPDOWN_OPTIONS = [
  {
    label: 'By rating',
    value: 'rating-desc',
  },
  {
    label: 'Price: low to high',
    value: 'price-asc',
  },
  {
    label: 'Price: high to low',
    value: 'price-desc',
  },
  {
    label: 'Name: A to Z',
    value: 'title-asc',
  },
]

export const PRODUCT_FILTER_GROUPS = [
  {
    defaultOpen: true,
    options: [
      { count: 110, label: 'Apple', value: 'apple' },
      { count: 125, label: 'Samsung', value: 'samsung' },
      { count: 68, label: 'Xiaomi', value: 'xiaomi' },
      { count: 44, label: 'Poco', value: 'poco' },
      { count: 36, label: 'OPPO', value: 'oppo' },
      { count: 10, label: 'Honor', value: 'honor' },
      { count: 34, label: 'Motorola', value: 'motorola' },
      { count: 22, label: 'Nokia', value: 'nokia' },
      { count: 35, label: 'Realme', value: 'realme' },
    ],
    searchable: true,
    title: 'Brand',
  },
  {
    options: [
      { count: 12, label: '3000-3999 mAh', value: '3000-3999' },
      { count: 42, label: '4000-4999 mAh', value: '4000-4999' },
      { count: 87, label: '5000 mAh and above', value: '5000-plus' },
    ],
    title: 'Battery capacity',
  },
  {
    options: [
      { count: 63, label: 'OLED', value: 'oled' },
      { count: 41, label: 'AMOLED', value: 'amoled' },
      { count: 28, label: 'IPS', value: 'ips' },
    ],
    title: 'Screen type',
  },
  {
    options: [
      { count: 18, label: '5.5-5.9 inches', value: '5-5' },
      { count: 76, label: '6.0-6.4 inches', value: '6-0' },
      { count: 54, label: '6.5 inches and above', value: '6-5' },
    ],
    title: 'Screen diagonal',
  },
  {
    options: [
      { count: 90, label: 'IP67', value: 'ip67' },
      { count: 52, label: 'IP68', value: 'ip68' },
    ],
    title: 'Protection class',
  },
  {
    options: [
      { count: 23, label: '64GB', value: '64gb' },
      { count: 64, label: '128GB', value: '128gb' },
      { count: 48, label: '256GB', value: '256gb' },
    ],
    title: 'Built-in memory',
  },
]
