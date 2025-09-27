import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GrowthRatesOrderByWithRelationInput } from '../growth-rates/growth-rates-order-by-with-relation.input';

@InputType()
export class ExperienceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    level?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    experience?: `${SortOrder}`;

    @Field(() => GrowthRatesOrderByWithRelationInput, {nullable:true})
    growthRate?: GrowthRatesOrderByWithRelationInput;
}
