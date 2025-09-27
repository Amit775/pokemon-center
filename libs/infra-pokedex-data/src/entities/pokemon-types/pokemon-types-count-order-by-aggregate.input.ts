import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PokemonTypesCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slot?: `${SortOrder}`;
}
