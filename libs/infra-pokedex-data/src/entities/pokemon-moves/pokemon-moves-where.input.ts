import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonScalarRelationFilter } from '../pokemon/pokemon-scalar-relation-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';
import { MovesScalarRelationFilter } from '../moves/moves-scalar-relation-filter.input';
import { PokemonMoveMethodsScalarRelationFilter } from '../pokemon-move-methods/pokemon-move-methods-scalar-relation-filter.input';

@InputType()
export class PokemonMovesWhereInput {

    @Field(() => [PokemonMovesWhereInput], {nullable:true})
    AND?: Array<PokemonMovesWhereInput>;

    @Field(() => [PokemonMovesWhereInput], {nullable:true})
    OR?: Array<PokemonMovesWhereInput>;

    @Field(() => [PokemonMovesWhereInput], {nullable:true})
    NOT?: Array<PokemonMovesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_move_method_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    level?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    mastery?: Identity<IntFilter>;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: Identity<PokemonScalarRelationFilter>;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: Identity<VersionGroupsScalarRelationFilter>;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    move?: Identity<MovesScalarRelationFilter>;

    @Field(() => PokemonMoveMethodsScalarRelationFilter, {nullable:true})
    moveMethod?: Identity<PokemonMoveMethodsScalarRelationFilter>;
}
