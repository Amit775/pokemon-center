import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonEvolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';

@InputType()
export class GendersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    evolution?: PokemonEvolutionOrderByRelationAggregateInput;
}
