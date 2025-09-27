import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonEggGroupsOrderByRelationAggregateInput } from '../pokemon-egg-groups/pokemon-egg-groups-order-by-relation-aggregate.input';

@InputType()
export class EggGroupsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => PokemonEggGroupsOrderByRelationAggregateInput, {nullable:true})
    species?: PokemonEggGroupsOrderByRelationAggregateInput;
}
