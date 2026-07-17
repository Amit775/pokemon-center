import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PokedexVersionGroupsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;
}
