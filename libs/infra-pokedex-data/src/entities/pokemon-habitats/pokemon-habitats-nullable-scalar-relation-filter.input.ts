import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';

@InputType()
export class PokemonHabitatsNullableScalarRelationFilter {

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    is?: PokemonHabitatsWhereInput;

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    isNot?: PokemonHabitatsWhereInput;
}
