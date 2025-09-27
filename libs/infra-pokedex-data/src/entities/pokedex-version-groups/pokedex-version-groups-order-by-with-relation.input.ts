import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokedexesOrderByWithRelationInput } from '../pokedexes/pokedexes-order-by-with-relation.input';
import { VersionGroupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';

@InputType()
export class PokedexVersionGroupsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => PokedexesOrderByWithRelationInput, {nullable:true})
    pokedex?: PokedexesOrderByWithRelationInput;

    @Field(() => VersionGroupsOrderByWithRelationInput, {nullable:true})
    versionGroup?: VersionGroupsOrderByWithRelationInput;
}
