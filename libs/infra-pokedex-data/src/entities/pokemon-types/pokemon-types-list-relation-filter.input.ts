import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonTypesWhereInput } from './pokemon-types-where.input';

@InputType()
export class PokemonTypesListRelationFilter {

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    every?: PokemonTypesWhereInput;

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    some?: PokemonTypesWhereInput;

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    none?: PokemonTypesWhereInput;
}
