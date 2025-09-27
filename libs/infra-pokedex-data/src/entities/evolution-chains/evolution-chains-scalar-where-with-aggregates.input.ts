import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class EvolutionChainsScalarWhereWithAggregatesInput {

    @Field(() => [EvolutionChainsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EvolutionChainsScalarWhereWithAggregatesInput>;

    @Field(() => [EvolutionChainsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EvolutionChainsScalarWhereWithAggregatesInput>;

    @Field(() => [EvolutionChainsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EvolutionChainsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    baby_trigger_item_id?: IntNullableWithAggregatesFilter;
}
