import { useState } from 'react'
import {
  CarrerArticleBox,
  CarrerTitle,
  CarrerIntroduction,
  CarrerButtonBox,
  CarrerArrow,
  Text,
  TextResponsibilities,
  ResponsibilitiesList,
} from './CarrerElements'

const occupations = [
  {
    id: 1,
    title: 'Asystent projektanta',
    intro:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    worklocation: 'Miejsce pracy: Warszawa,',
    responsibilities: 'Zakres obowiązków:',
    responlist: [
      'Prowadzenie rejestru i kalendarza projektów;',

      'Nadzór nad terminowością wykonywanych prac na budowie w oparciu o harmonogram;',

      'Przygotowywanie (uzupełnianie) umów i zleceń oraz ',
      'Sporządzanie zamówień, weryfikacja ofert dostawców i podwykonawców w oparciu o budżet,',
      'Rejestrowanie dokumentów kosztowych realizowanych projektów; ',
      'Uczestniczenie w naradach koordynacyjnych;',
      'Weryfikacja przedmiarów i obmiarów robót;',
      'Sporządzanie dokumentacji warsztatowej i powykonawczej,',
      'Obsługa korespondenci',
    ],
  },
  {
    id: 2,
    title: 'Projektant wnętrz',
    intro:
      ' Dururur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    worklocation: 'Miejsce pracy: Gdynia,',
    responsibilities: 'Zakres obowiązków:',
    responlist: [
      'Prowadzenie rejestru i kalendarza projektów;',

      'Nadzór nad terminowością wykonywanych prac na budowie w oparciu o harmonogram;',

      'Przygotowywanie (uzupełnianie) umów i zleceń oraz ',
      'Sporządzanie zamówień, weryfikacja ofert dostawców i podwykonawców w oparciu o budżet,',
      'Rejestrowanie dokumentów kosztowych realizowanych projektów; ',
      'Uczestniczenie w naradach koordynacyjnych;',
      'Weryfikacja przedmiarów i obmiarów robót;',
      'Sporządzanie dokumentacji warsztatowej i powykonawczej,',
      'Obsługa korespondenci',
    ],
  },
  {
    id: 3,
    title: 'Menager Projektów',
    intro:
      ' Dururur Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    worklocation: 'Miejsce pracy: Wrocław,',
    responsibilities: 'Zakres obowiązków:',
    responlist: [
      'Prowadzenie rejestru i kalendarza projektów;',

      'Nadzór nad terminowością wykonywanych prac na budowie w oparciu o harmonogram;',

      'Przygotowywanie (uzupełnianie) umów i zleceń oraz ',
      'Sporządzanie zamówień, weryfikacja ofert dostawców i podwykonawców w oparciu o budżet,',
      'Rejestrowanie dokumentów kosztowych realizowanych projektów; ',
      'Uczestniczenie w naradach koordynacyjnych;',
      'Weryfikacja przedmiarów i obmiarów robót;',
      'Sporządzanie dokumentacji warsztatowej i powykonawczej,',
      'Obsługa korespondenci',
    ],
  },
]

const Occupations = () => {
  const [isTextOpen, setTextOpen] = useState(null)
  const [isActive, setActive] = useState(false)

  function handleTextOpen(id) {
    setTextOpen(id)
    setActive(!isActive)
  }

  return (
    <>
      {occupations.map((item, index) => (
        <CarrerArticleBox key={item.id} id={item.id} isTextOpen={isTextOpen} isActive={isActive}>
          <CarrerTitle>{item.title}</CarrerTitle>
          <CarrerIntroduction>
            {item.intro}
            {item.id}
          </CarrerIntroduction>
          <CarrerButtonBox
            id={item.id}
            isTextOpen={isTextOpen}
            isActive={isActive}
            onClick={() => handleTextOpen(item.id)}
          >
            <CarrerArrow />
          </CarrerButtonBox>
          {index + 1 === isTextOpen && isActive ? (
            <Text>
              {item.worklocation}
              <TextResponsibilities>
                {item.responsibilities}
                {item.responlist.map((i) => (
                  <ResponsibilitiesList key={i}>{i}</ResponsibilitiesList>
                ))}
              </TextResponsibilities>
            </Text>
          ) : null}
        </CarrerArticleBox>
      ))}
    </>
  )
}

export default Occupations
