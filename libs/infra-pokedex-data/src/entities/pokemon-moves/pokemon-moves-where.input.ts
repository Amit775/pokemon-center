import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
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
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokemon_move_method_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    level?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    order?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    mastery?: IntNullableFilter;

    @Field(() => PokemonScalarRelationFilter, {nullable:true})
    pokemon?: PokemonScalarRelationFilter;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: VersionGroupsScalarRelationFilter;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    move?: MovesScalarRelationFilter;

    @Field(() => PokemonMoveMethodsScalarRelationFilter, {nullable:true})
    moveMethod?: PokemonMoveMethodsScalarRelationFilter;
}
