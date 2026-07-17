import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonGameIndicesCreateManyPokemonInput {

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;
}
