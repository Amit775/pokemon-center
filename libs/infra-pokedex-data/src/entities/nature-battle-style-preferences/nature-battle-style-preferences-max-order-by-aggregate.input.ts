import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NatureBattleStylePreferencesMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    nature_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_battle_style_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    low_hp_preference?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    high_hp_preference?: `${SortOrder}`;
}
