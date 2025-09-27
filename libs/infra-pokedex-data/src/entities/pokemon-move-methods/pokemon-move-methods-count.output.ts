import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonMoveMethodsCount {

    @Field(() => Int, {nullable:false})
    pokemonMoves?: number;

    @Field(() => Int, {nullable:false})
    versionGroups?: number;
}
