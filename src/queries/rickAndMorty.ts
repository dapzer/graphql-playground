import { gql } from '../types/gql';

export const GET_CHARACTERS = gql(/* GraphQL */`
    query GetCharacters ($page: Int!) {
        characters (page: $page) {
            results {
                id
                name
                image
                species
                episode {
                    id
                    name
                }
            }
        }
        
        locations {
            results {
                name
                id
            }
        }
    }
`);

export const GET_CHARACTER = gql(/* GraphQL */`
    query GetCharacter ($id: ID!) {
        character(id: $id) {
            id
            name
            image
            gender
            status
        }
    }
`);
