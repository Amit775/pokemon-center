import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PokemonEggGroupsMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    egg_group_id?: `${SortOrder}`;
}
