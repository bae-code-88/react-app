
const steps = [
  {
    id: 1,
    info: 'Typ klienta',
    label: '1/8',
    description: `Jestem Klientem `,
    buttons: { allBtn: [`Indywidualnym`, `Komercyjnym`] },
  },
  {
    id: 2,
    info: 'Typ nieruchomości',
    label: '2/8',
    description: 'Nieruchomość',
    buttons: { individualBtn: [`Mieszkanie`, `Dom`], commercialBtn: ['Lokal'] },
  },
  {
    id: 3,
    info: 'Zakres prac',
    label: '3/8',
    description: `Potrzebuję`,
    buttons: { allBtn: [`Realizacji "pod klucz"`, `Projektu`, 'Remontu'] },
  },
  {
    id: 4,
    info: 'Metraż',
    label: '4/8',
    description: `Metraż`,
    buttons: { allBtn: ['Zapisz'] },
  },
  {
    id: 5,
    info: 'Budżet',
    label: '5/8',
    description: `Budżet`,
    buttons: { allBtn: [`Określony`, `Nieokreślony`] },
  },
  {
    id: 6,
    info: 'Oczekiwania',
    label: '6/8',
    description: `Oczekiwania`,
    buttons: { allBtn: ['Pomiń', 'Zapisz'] },
  },
  {
    id: 7,
    info: 'Termin',
    label: '7/8',
    description: `Termin`,
    buttons: { allBtn: ['Pomiń', 'Zapisz'] },
  },
  {
    id: 8,
    info: 'Kontakt',
    label: '8/8',
    description: `Kontakt`,
    buttons: { allBtn: ['Wyślij'] },
  },
]

export default steps;
