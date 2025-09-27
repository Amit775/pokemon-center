import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { VersionGroupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { MovesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';
import { PokemonMoveMethodsOrderByWithRelationInput } from '../pokemon-move-methods/pokemon-move-methods-order-by-with-relation.input';

@InputType()
export class PokemonMovesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokemon_move_method_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    level?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    order?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    mastery?: SortOrderInput;

    @Field(() => PokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: PokemonOrderByWithRelationInput;

    @Field(() => VersionGroupsOrderByWithRelationInput, {nullable:true})
    versionGroup?: VersionGroupsOrderByWithRelationInput;

    @Field(() => MovesOrderByWithRelationInput, {nullable:true})
    move?: MovesOrderByWithRelationInput;

    @Field(() => PokemonMoveMethodsOrderByWithRelationInput, {nullable:true})
    moveMethod?: PokemonMoveMethodsOrderByWithRelationInput;
}
