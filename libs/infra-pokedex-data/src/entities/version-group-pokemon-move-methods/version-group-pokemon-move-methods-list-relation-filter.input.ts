import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsWhereInput } from './version-group-pokemon-move-methods-where.input';

@InputType()
export class VersionGroupPokemonMoveMethodsListRelationFilter {

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    every?: Identity<VersionGroupPokemonMoveMethodsWhereInput>;

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    some?: Identity<VersionGroupPokemonMoveMethodsWhereInput>;

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    none?: Identity<VersionGroupPokemonMoveMethodsWhereInput>;
}
