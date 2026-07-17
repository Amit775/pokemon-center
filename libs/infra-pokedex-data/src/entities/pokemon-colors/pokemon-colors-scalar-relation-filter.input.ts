import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';

@InputType()
export class PokemonColorsScalarRelationFilter {

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    is?: Identity<PokemonColorsWhereInput>;

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    isNot?: Identity<PokemonColorsWhereInput>;
}
