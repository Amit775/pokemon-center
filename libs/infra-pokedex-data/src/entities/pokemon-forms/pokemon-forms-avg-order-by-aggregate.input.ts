import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PokemonFormsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    introduced_in_version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_default?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_mega?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    form_order?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;
}
