import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class CharacteristicsScalarWhereWithAggregatesInput {

    @Field(() => [CharacteristicsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CharacteristicsScalarWhereWithAggregatesInput>;

    @Field(() => [CharacteristicsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CharacteristicsScalarWhereWithAggregatesInput>;

    @Field(() => [CharacteristicsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CharacteristicsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stat_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    gene_mod_5?: Identity<IntWithAggregatesFilter>;
}
