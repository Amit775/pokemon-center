import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonCreateNestedOneWithoutGameIndicesInput } from '../pokemon/pokemon-create-nested-one-without-game-indices.input';
import { VersionsCreateNestedOneWithoutPokemonGameIndicesInput } from '../versions/versions-create-nested-one-without-pokemon-game-indices.input';

@InputType()
export class PokemonGameIndicesCreateInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => PokemonCreateNestedOneWithoutGameIndicesInput, {nullable:false})
    pokemon!: PokemonCreateNestedOneWithoutGameIndicesInput;

    @Field(() => VersionsCreateNestedOneWithoutPokemonGameIndicesInput, {nullable:false})
    version!: VersionsCreateNestedOneWithoutPokemonGameIndicesInput;
}
