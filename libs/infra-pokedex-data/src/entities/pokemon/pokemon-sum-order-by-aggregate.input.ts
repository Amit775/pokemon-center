import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PokemonSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    height?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    weight?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    base_experience?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_default?: `${SortOrder}`;
}
