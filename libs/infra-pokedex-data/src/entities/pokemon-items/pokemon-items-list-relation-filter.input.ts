import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonItemsWhereInput } from './pokemon-items-where.input';

@InputType()
export class PokemonItemsListRelationFilter {

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    every?: Identity<PokemonItemsWhereInput>;

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    some?: Identity<PokemonItemsWhereInput>;

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    none?: Identity<PokemonItemsWhereInput>;
}
