import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries/rickAndMorty';
import Image from 'next/image';
import GetCharacterById from './GetCharacterById';
import UiCard from './card/UiCard';

interface Props {

}

const CharactersRow: FC<Props> = () => {
  const [page, setPage] = useState<number>(1);
  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page: page || 1 },
  });

  return (
    <>
      <h2>Список персонажей</h2>

      <div className='block'>
        <div className={'row'}>
          <button onClick={() => setPage(page - 1)}>Пред. страница</button>
          <button onClick={() => setPage(page + 1)}>След. страница</button>
        </div>
      </div>

      <span>Текущая страница: {page}</span>

      <div className={'block'}>
        <div className={'row'}>
          {loading && <h1>Loading...</h1>}
          {data?.characters?.results && data.characters.results.map((el) => el && (
            <UiCard key={el.id} link={''} image={el.image!} title={el.name!} date={`Разновидность: ${el.species}`} width={"240px"}>
              <p>Идентификационный номер: {el.id}</p>
            </UiCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharactersRow;
