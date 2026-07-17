import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroups } from '../version-groups/version-groups.model';
import type { Identity } from 'identity-type';
import { PokemonMoveMethods } from '../pokemon-move-methods/pokemon-move-methods.model';

/**
 * @@TypeGraphQL.type(name: "VersionGroupPokemonMoveMethod")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "VersionGroupPokemonMoveMethod")'})
export class VersionGroupPokemonMoveMethods {

    @Field(() => ID, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_move_method_id!: number;

    @Field(() => VersionGroups, {nullable:false})
    versionGroup?: Identity<VersionGroups>;

    @Field(() => PokemonMoveMethods, {nullable:false})
    moveMethod?: Identity<PokemonMoveMethods>;
}
