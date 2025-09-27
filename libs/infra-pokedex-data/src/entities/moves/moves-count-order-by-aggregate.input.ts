import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MovesCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    power?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pp?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    accuracy?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    effect_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    effect_chance?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contest_effect_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    super_contest_effect_id?: `${SortOrder}`;
}
