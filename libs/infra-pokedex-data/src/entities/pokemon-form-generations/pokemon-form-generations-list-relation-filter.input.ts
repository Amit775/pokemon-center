import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormGenerationsWhereInput } from './pokemon-form-generations-where.input';

@InputType()
export class PokemonFormGenerationsListRelationFilter {

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    every?: PokemonFormGenerationsWhereInput;

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    some?: PokemonFormGenerationsWhereInput;

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    none?: PokemonFormGenerationsWhereInput;
}
