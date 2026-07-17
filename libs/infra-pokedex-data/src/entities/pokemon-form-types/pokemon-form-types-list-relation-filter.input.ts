import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormTypesWhereInput } from './pokemon-form-types-where.input';

@InputType()
export class PokemonFormTypesListRelationFilter {

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    every?: Identity<PokemonFormTypesWhereInput>;

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    some?: Identity<PokemonFormTypesWhereInput>;

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    none?: Identity<PokemonFormTypesWhereInput>;
}
