import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesScalarRelationFilter {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    is?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    isNot?: PokemonSpeciesWhereInput;
}
