import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { VersionGroupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { ItemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';
import { MovesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';

@InputType()
export class MachinesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    machine_number?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => VersionGroupsOrderByWithRelationInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsOrderByWithRelationInput>;

    @Field(() => ItemsOrderByWithRelationInput, {nullable:true})
    item?: Identity<ItemsOrderByWithRelationInput>;

    @Field(() => MovesOrderByWithRelationInput, {nullable:true})
    move?: Identity<MovesOrderByWithRelationInput>;
}
