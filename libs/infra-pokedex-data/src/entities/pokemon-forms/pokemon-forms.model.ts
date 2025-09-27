import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon } from '../pokemon/pokemon.model';
import { VersionGroups } from '../version-groups/version-groups.model';
import { PokemonFormGenerations } from '../pokemon-form-generations/pokemon-form-generations.model';
import { PokemonFormTypes } from '../pokemon-form-types/pokemon-form-types.model';
import { PokemonFormsCount } from './pokemon-forms-count.output';

/**
 * @@TypeGraphQL.type(name: "PokemonForm")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonForm")'})
export class PokemonForms {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:true})
    form_identifier!: string | null;

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    introduced_in_version_group_id!: number;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => Int, {nullable:false})
    is_battle_only!: number;

    @Field(() => Int, {nullable:false})
    is_mega!: number;

    @Field(() => Int, {nullable:false})
    form_order!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Pokemon, {nullable:false})
    pokemon?: Pokemon;

    @Field(() => VersionGroups, {nullable:false})
    versionGroup?: VersionGroups;

    @Field(() => [PokemonFormGenerations], {nullable:true})
    generations?: Array<PokemonFormGenerations>;

    @Field(() => [PokemonFormTypes], {nullable:true})
    types?: Array<PokemonFormTypes>;

    @Field(() => PokemonFormsCount, {nullable:false})
    _count?: PokemonFormsCount;
}
