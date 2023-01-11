const steps = [
  {
    id: 1,
    info: 'Typ klienta',
    label: '1/8',
    description: `Jestem Klientem `,
    buttons: { all: [`Indywidualnym`, `Komercyjnym`] },
  },
  {
    id: 2,
    info: 'Typ nieruchomości',
    label: '2/8',
    description: 'Nieruchomość',
    buttons: { individual: [`Mieszkanie`, `Dom`], commercial: ['Lokal'] },
  },
  {
    id: 3,
    info: 'Zakres prac',
    label: '3/8',
    description: `Potrzebuję`,
    buttons: { all: [`Realizacji "pod klucz"`, `Projektu`, 'Remontu'] },
  },
  {
    id: 4,
    info: 'Metraż',
    label: '4/8',
    description: `Metraż`,
    buttons: { all: ['Zapisz'] },
  },
  {
    id: 5,
    info: 'Budżet',
    label: '5/8',
    description: `Budżet`,
    buttons: { all: [`Określony`, `Nieokreślony`] },
  },
  {
    id: 6,
    info: 'Oczekiwania',
    label: '6/8',
    description: `Oczekiwania`,
    buttons: { all: ['Pomiń', 'Zapisz'] },
  },
  {
    id: 7,
    info: 'Termin',
    label: '7/8',
    description: `Termin`,
    buttons: { all: ['Pomiń', 'Zapisz'] },
  },
  {
    id: 8,
    info: 'Kontakt',
    label: '8/8',
    description: `Kontakt`,
    buttons: { all: ['Wyślij'] },
  },
]

export default steps
