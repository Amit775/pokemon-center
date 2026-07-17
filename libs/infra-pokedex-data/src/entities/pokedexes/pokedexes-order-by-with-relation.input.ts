import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RegionsOrderByWithRelationInput } from '../regions/regions-order-by-with-relation.input';
import { PokemonDexNumbersOrderByRelationAggregateInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-order-by-relation-aggregate.input';
import { PokedexVersionGroupsOrderByRelationAggregateInput } from '../pokedex-version-groups/pokedex-version-groups-order-by-relation-aggregate.input';

@InputType()
export class PokedexesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    region_id?: Identity<SortOrderInput>;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_main_series?: `${SortOrder}`;

    @Field(() => RegionsOrderByWithRelationInput, {nullable:true})
    region?: Identity<RegionsOrderByWithRelationInput>;

    @Field(() => PokemonDexNumbersOrderByRelationAggregateInput, {nullable:true})
    dexNumbers?: Identity<PokemonDexNumbersOrderByRelationAggregateInput>;

    @Field(() => PokedexVersionGroupsOrderByRelationAggregateInput, {nullable:true})
    versionGroups?: Identity<PokedexVersionGroupsOrderByRelationAggregateInput>;
}
