import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';

@InputType()
export class PokemonFormsListRelationFilter {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    every?: Identity<PokemonFormsWhereInput>;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    some?: Identity<PokemonFormsWhereInput>;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    none?: Identity<PokemonFormsWhereInput>;
}
