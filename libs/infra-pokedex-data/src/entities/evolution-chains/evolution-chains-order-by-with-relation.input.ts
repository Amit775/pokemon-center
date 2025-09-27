import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ItemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';
import { PokemonSpeciesOrderByRelationAggregateInput } from '../pokemon-species/pokemon-species-order-by-relation-aggregate.input';

@InputType()
export class EvolutionChainsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    baby_trigger_item_id?: SortOrderInput;

    @Field(() => ItemsOrderByWithRelationInput, {nullable:true})
    babyTriggerItem?: ItemsOrderByWithRelationInput;

    @Field(() => PokemonSpeciesOrderByRelationAggregateInput, {nullable:true})
    species?: PokemonSpeciesOrderByRelationAggregateInput;
}
