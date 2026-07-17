import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class BerriesScalarWhereInput {

    @Field(() => [BerriesScalarWhereInput], {nullable:true})
    AND?: Array<BerriesScalarWhereInput>;

    @Field(() => [BerriesScalarWhereInput], {nullable:true})
    OR?: Array<BerriesScalarWhereInput>;

    @Field(() => [BerriesScalarWhereInput], {nullable:true})
    NOT?: Array<BerriesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    firmness_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    natural_gift_power?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    natural_gift_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    size?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    max_harvest?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    growth_time?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    soil_dryness?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    smoothness?: Identity<IntFilter>;
}
