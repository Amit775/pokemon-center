import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BerriesScalarWhereInput {

    @Field(() => [BerriesScalarWhereInput], {nullable:true})
    AND?: Array<BerriesScalarWhereInput>;

    @Field(() => [BerriesScalarWhereInput], {nullable:true})
    OR?: Array<BerriesScalarWhereInput>;

    @Field(() => [BerriesScalarWhereInput], {nullable:true})
    NOT?: Array<BerriesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    firmness_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    natural_gift_power?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    natural_gift_type_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    size?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_harvest?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    growth_time?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    soil_dryness?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    smoothness?: IntFilter;
}
