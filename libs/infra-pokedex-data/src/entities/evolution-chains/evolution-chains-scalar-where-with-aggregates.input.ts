import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class EvolutionChainsScalarWhereWithAggregatesInput {

    @Field(() => [EvolutionChainsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EvolutionChainsScalarWhereWithAggregatesInput>;

    @Field(() => [EvolutionChainsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EvolutionChainsScalarWhereWithAggregatesInput>;

    @Field(() => [EvolutionChainsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EvolutionChainsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    baby_trigger_item_id?: Identity<IntWithAggregatesFilter>;
}
