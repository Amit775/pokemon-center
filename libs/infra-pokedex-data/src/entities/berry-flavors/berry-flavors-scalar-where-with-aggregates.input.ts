import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class BerryFlavorsScalarWhereWithAggregatesInput {

    @Field(() => [BerryFlavorsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BerryFlavorsScalarWhereWithAggregatesInput>;

    @Field(() => [BerryFlavorsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BerryFlavorsScalarWhereWithAggregatesInput>;

    @Field(() => [BerryFlavorsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BerryFlavorsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    berry_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    contest_type_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    flavor?: Identity<IntWithAggregatesFilter>;
}
