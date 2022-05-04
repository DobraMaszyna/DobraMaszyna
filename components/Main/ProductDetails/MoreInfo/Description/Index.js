import styled from 'styled-components';

const Description = () => {
  return (
    <DescriptionStyled>
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
    </DescriptionStyled>
  );
};

const DescriptionStyled = styled.section`
  padding-inline: 2vmin;

  .center {
    margin: auto;
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
    margin-left: 5%;

    li {
      font-size: 1.2rem;
    }

    li::before {
      content: '\\27A4';
      color: ${(props) => props.theme.colors.purplePrimary};
      display: inline-block;
      width: 2.5em;
    }
  }
`;

export default Description;
