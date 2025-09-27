import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class BerryFirmnessScalarWhereWithAggregatesInput {

    @Field(() => [BerryFirmnessScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BerryFirmnessScalarWhereWithAggregatesInput>;

    @Field(() => [BerryFirmnessScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BerryFirmnessScalarWhereWithAggregatesInput>;

    @Field(() => [BerryFirmnessScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BerryFirmnessScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
