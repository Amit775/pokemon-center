import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VersionGroupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { PokemonMoveMethodsOrderByWithRelationInput } from '../pokemon-move-methods/pokemon-move-methods-order-by-with-relation.input';

@InputType()
export class VersionGroupPokemonMoveMethodsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokemon_move_method_id?: `${SortOrder}`;

    @Field(() => VersionGroupsOrderByWithRelationInput, {nullable:true})
    versionGroup?: VersionGroupsOrderByWithRelationInput;

    @Field(() => PokemonMoveMethodsOrderByWithRelationInput, {nullable:true})
    moveMethod?: PokemonMoveMethodsOrderByWithRelationInput;
}
