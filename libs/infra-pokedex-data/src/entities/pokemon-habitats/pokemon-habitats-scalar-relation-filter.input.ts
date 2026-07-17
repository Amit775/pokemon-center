import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';

@InputType()
export class PokemonHabitatsScalarRelationFilter {

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    is?: Identity<PokemonHabitatsWhereInput>;

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    isNot?: Identity<PokemonHabitatsWhereInput>;
}
