import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateNestedOneWithoutGameIndicesInput } from '../pokemon/pokemon-create-nested-one-without-game-indices.input';

@InputType()
export class PokemonGameIndicesCreateWithoutVersionInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => PokemonCreateNestedOneWithoutGameIndicesInput, {nullable:false})
    pokemon!: Identity<PokemonCreateNestedOneWithoutGameIndicesInput>;
}
