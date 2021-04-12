import styled from "styled-components";
import CharacterCard from "../../components/CharacterCard";

// EXECUTED ON SERVER
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://akabab.github.io/starwars-api/api/id/${context.params.id}.json`
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://akabab.github.io/starwars-api/api/all.json");
  const characters = await res.json();
  const ids = characters.map((character) => character.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

const Character = ({ character }) => {
  return (
    <CharacterContainer>
      <StarfieldLeft />
      <CharacterCard character={character} />
      <StarfieldRight />
    </CharacterContainer>
  );
};

export default Character;

const CharacterContainer = styled.div`
  padding: 40px;
  margin-top: 200px;
`;

const StarfieldLeft = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  left: 0;
  height: 1700px;
  background-position: left center;
  background-size: 100% auto;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg");
`;

const StarfieldRight = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  background-repeat: repeat-y;
  right: 0;
  height: 1700px;
  background-position: right center;
  background-size: auto 100%;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg");
`;
