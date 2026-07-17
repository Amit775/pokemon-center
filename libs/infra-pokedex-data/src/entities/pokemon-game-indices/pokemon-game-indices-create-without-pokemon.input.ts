import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsCreateNestedOneWithoutPokemonGameIndicesInput } from '../versions/versions-create-nested-one-without-pokemon-game-indices.input';

@InputType()
export class PokemonGameIndicesCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => VersionsCreateNestedOneWithoutPokemonGameIndicesInput, {nullable:false})
    version!: Identity<VersionsCreateNestedOneWithoutPokemonGameIndicesInput>;
}
