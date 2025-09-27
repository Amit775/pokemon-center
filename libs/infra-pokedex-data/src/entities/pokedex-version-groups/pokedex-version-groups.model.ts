import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokedexes } from '../pokedexes/pokedexes.model';
import { VersionGroups } from '../version-groups/version-groups.model';

/**
 * @@TypeGraphQL.type(name: "PokedexVersionGroup")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokedexVersionGroup")'})
export class PokedexVersionGroups {

    @Field(() => ID, {nullable:false})
    pokedex_id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Pokedexes, {nullable:false})
    pokedex?: Pokedexes;

    @Field(() => VersionGroups, {nullable:false})
    versionGroup?: VersionGroups;
}
