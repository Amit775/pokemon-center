import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormTypesWhereInput } from './pokemon-form-types-where.input';

@InputType()
export class PokemonFormTypesListRelationFilter {

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    every?: PokemonFormTypesWhereInput;

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    some?: PokemonFormTypesWhereInput;

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    none?: PokemonFormTypesWhereInput;
}
