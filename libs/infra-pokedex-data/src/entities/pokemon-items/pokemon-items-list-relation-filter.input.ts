import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsWhereInput } from './pokemon-items-where.input';

@InputType()
export class PokemonItemsListRelationFilter {

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    every?: PokemonItemsWhereInput;

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    some?: PokemonItemsWhereInput;

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    none?: PokemonItemsWhereInput;
}
