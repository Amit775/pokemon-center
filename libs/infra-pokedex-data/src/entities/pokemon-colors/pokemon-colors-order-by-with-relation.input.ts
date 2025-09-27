import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonSpeciesOrderByRelationAggregateInput } from '../pokemon-species/pokemon-species-order-by-relation-aggregate.input';

@InputType()
export class PokemonColorsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => PokemonSpeciesOrderByRelationAggregateInput, {nullable:true})
    species?: PokemonSpeciesOrderByRelationAggregateInput;
}
