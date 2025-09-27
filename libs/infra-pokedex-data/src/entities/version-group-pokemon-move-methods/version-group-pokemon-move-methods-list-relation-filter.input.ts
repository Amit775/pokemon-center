import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsWhereInput } from './version-group-pokemon-move-methods-where.input';

@InputType()
export class VersionGroupPokemonMoveMethodsListRelationFilter {

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    every?: VersionGroupPokemonMoveMethodsWhereInput;

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    some?: VersionGroupPokemonMoveMethodsWhereInput;

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    none?: VersionGroupPokemonMoveMethodsWhereInput;
}
