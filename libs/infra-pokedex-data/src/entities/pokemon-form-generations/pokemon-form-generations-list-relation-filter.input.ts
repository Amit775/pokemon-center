import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsWhereInput } from './pokemon-form-generations-where.input';

@InputType()
export class PokemonFormGenerationsListRelationFilter {

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    every?: Identity<PokemonFormGenerationsWhereInput>;

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    some?: Identity<PokemonFormGenerationsWhereInput>;

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    none?: Identity<PokemonFormGenerationsWhereInput>;
}
