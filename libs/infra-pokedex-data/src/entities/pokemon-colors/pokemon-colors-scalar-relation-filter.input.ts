import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';

@InputType()
export class PokemonColorsScalarRelationFilter {

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    is?: PokemonColorsWhereInput;

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    isNot?: PokemonColorsWhereInput;
}
