import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class EvolutionTriggersScalarWhereWithAggregatesInput {

    @Field(() => [EvolutionTriggersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EvolutionTriggersScalarWhereWithAggregatesInput>;

    @Field(() => [EvolutionTriggersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EvolutionTriggersScalarWhereWithAggregatesInput>;

    @Field(() => [EvolutionTriggersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EvolutionTriggersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
