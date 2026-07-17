import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';
import { PokemonFormGenerationsListRelationFilter } from '../pokemon-form-generations/pokemon-form-generations-list-relation-filter.input';
import { PokemonFormTypesListRelationFilter } from '../pokemon-form-types/pokemon-form-types-list-relation-filter.input';

@InputType()
export class PokemonFormsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PokemonFormsWhereInput], {nullable:true})
    AND?: Array<PokemonFormsWhereInput>;

    @Field(() => [PokemonFormsWhereInput], {nullable:true})
    OR?: Array<PokemonFormsWhereInput>;

    @Field(() => [PokemonFormsWhereInput], {nullable:true})
    NOT?: Array<PokemonFormsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => StringFilter, {nullable:true})
    form_identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    introduced_in_version_group_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_default?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_battle_only?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_mega?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    form_order?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: Identity<PokemonScalarRelationFilter>;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: Identity<VersionGroupsScalarRelationFilter>;

    @Field(() => PokemonFormGenerationsListRelationFilter, {nullable:true})
    generations?: Identity<PokemonFormGenerationsListRelationFilter>;

    @Field(() => PokemonFormTypesListRelationFilter, {nullable:true})
    types?: Identity<PokemonFormTypesListRelationFilter>;
}
