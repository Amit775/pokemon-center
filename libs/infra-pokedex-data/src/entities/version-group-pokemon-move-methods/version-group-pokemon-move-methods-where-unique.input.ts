import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsWhereInput } from './version-group-pokemon-move-methods-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';
import { PokemonMoveMethodsScalarRelationFilter } from '../pokemon-move-methods/pokemon-move-methods-scalar-relation-filter.input';

@InputType()
export class VersionGroupPokemonMoveMethodsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    version_group_id?: number;

    @Field(() => [VersionGroupPokemonMoveMethodsWhereInput], {nullable:true})
    AND?: Array<VersionGroupPokemonMoveMethodsWhereInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsWhereInput], {nullable:true})
    OR?: Array<VersionGroupPokemonMoveMethodsWhereInput>;

    @Field(() => [VersionGroupPokemonMoveMethodsWhereInput], {nullable:true})
    NOT?: Array<VersionGroupPokemonMoveMethodsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_move_method_id?: IntFilter;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: VersionGroupsScalarRelationFilter;

    @Field(() => PokemonMoveMethodsScalarRelationFilter, {nullable:true})
    moveMethod?: PokemonMoveMethodsScalarRelationFilter;
}
