import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonTypesWhereInput } from './pokemon-types-where.input';

@InputType()
export class PokemonTypesListRelationFilter {

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    every?: Identity<PokemonTypesWhereInput>;

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    some?: Identity<PokemonTypesWhereInput>;

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    none?: Identity<PokemonTypesWhereInput>;
}
