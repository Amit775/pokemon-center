import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { PokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { VersionsOrderByWithRelationInput } from '../versions/versions-order-by-with-relation.input';
import { ItemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';

@InputType()
export class PokemonItemsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rarity?: `${SortOrder}`;

    @Field(() => PokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: Identity<PokemonOrderByWithRelationInput>;

    @Field(() => VersionsOrderByWithRelationInput, {nullable:true})
    version?: Identity<VersionsOrderByWithRelationInput>;

    @Field(() => ItemsOrderByWithRelationInput, {nullable:true})
    item?: Identity<ItemsOrderByWithRelationInput>;
}
