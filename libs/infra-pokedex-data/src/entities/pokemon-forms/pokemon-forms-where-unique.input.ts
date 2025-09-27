import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
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
    identifier?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    form_identifier?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    introduced_in_version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_default?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_battle_only?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_mega?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    form_order?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    order?: IntFilter;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: PokemonScalarRelationFilter;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: VersionGroupsScalarRelationFilter;

    @Field(() => PokemonFormGenerationsListRelationFilter, {nullable:true})
    generations?: PokemonFormGenerationsListRelationFilter;

    @Field(() => PokemonFormTypesListRelationFilter, {nullable:true})
    types?: PokemonFormTypesListRelationFilter;
}
