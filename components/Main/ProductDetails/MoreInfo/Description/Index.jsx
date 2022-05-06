import styled from 'styled-components';

import { useState } from 'react';

const Description = () => {
  const [isRolledUp, setIsRolledUp] = useState(true);

  return (
    <DescriptionStyled id='Opis' className={`card ${isRolledUp && 'roll-up'}`}>
      <h1>MASZYNA DO SZYCIA JANOME 780DC</h1>
      <p>
        Jeśli szukasz maszyny do szycia przeznaczonej do domowego użytku, przede
        wszystkim dla osób szyjących hobbystycznie, to w naszej ofercie
        znajdziesz wiele ciekawych propozycji, w tym maszynę komputerową Janome
        780 DC. Mimo elektronicznego systemu, licznych opcji oraz wielu
        dostępnych ściegów tę maszynę cechuje bardzo prosty sposób obsługi,
        dzięki któremu nada się ona nawet dla osób, które dopiero od niedawna
        interesują się szyciem. Maszyna posiada osiemdziesiąt programów
        ściegowych: poczynając od podstawowych ściegów, takich jak zygzak, czy
        ścieg kryty, przez ściegi do automatycznego obszywania dziurek, aż po
        dekoracyjne, które zachwycą pięknym wykonaniem. Dodatkowo w tej puli
        znajdują się także ściegi funkcyjne, takie jak ten przeznaczony do
        wszywania aplikacji.
      </p>
      <br />
      <img
        className='center'
        src='https://szyj.pl/images/promocje-do-maszyn/janome/gratis-rotacyjne-stopka-do-zamka-krytego-janome.jpg'
        alt=''
      />
      <br />
      <h1 className='list-title'>Więcej informacji</h1>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
      <button onClick={() => setIsRolledUp(!isRolledUp)} className='roll-btn'>
        {isRolledUp ? 'Rozwiń' : 'Zwiń '}
      </button>
    </DescriptionStyled>
  );
};

const DescriptionStyled = styled.section`
  padding: 2rem 5vmin;
  padding-bottom: 150px;
  text-align: center;
  position: relative;

  overflow: hidden;
  max-height: 100%;
  transition: max-height 0.35s ease-in-out;

  &.roll-up {
    max-height: 450px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      ${(props) => props.theme.colors.purplePrimary}
    );
    opacity: 0.4;
    pointer-events: none;
  }

  .roll-btn {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 25px;
    background: black;
    font-size: 1.2rem;
    border: none;
    color: white;
    border-radius: 5px;
  }

  .roll-btn:active + {
  }

  .center {
    margin: auto;
  }

  h1 {
    margin-block: 0.5rem;
  }

  img {
    border-radius: 1.5rem;
  }

  img.max {
    width: 100%;
  }

  br {
    content: '';
    margin: 12em;
    display: block;
    font-size: 24%;
  }

  .list-title {
    margin-left: 5%;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    margin: auto;

    li {
      font-size: 1.2rem;
    }

    li::before {
      content: '\\27A4';
      color: ${(props) => props.theme.colors.purplePrimary};
      display: inline-block;
      width: 2.5em;
      font-size: 0.9rem;
    }
  }
`;

export default Description;
