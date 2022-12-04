import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../queries/rickAndMorty';
import UiCard from './card/UiCard';

interface Props {

}

const GetCharacterById: FC<Props> = () => {
  const [searchedId, setSearchedId] = useState('');
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id: searchedId },
    skip: searchedId.length === 0,
  });


  return (
    <div>
      <h2>Поиск персонажа по id</h2>
      <input type='text' onChange={(e) => setSearchedId(e.target.value)} placeholder={'Введите id персонажа'} />

      <div className={"row"}>
        {data?.character && (
          <UiCard link={''} title={data.character?.name!} image={data.character?.image!}
                  date={`Статус ${data.character?.status}`} width={'240px'} />
        )}
      </div>

    </div>
  );
};

export default GetCharacterById;
