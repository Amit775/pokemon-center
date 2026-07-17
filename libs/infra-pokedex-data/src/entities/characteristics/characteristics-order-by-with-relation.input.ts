import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { StatsOrderByWithRelationInput } from '../stats/stats-order-by-with-relation.input';

@InputType()
export class CharacteristicsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gene_mod_5?: `${SortOrder}`;

    @Field(() => StatsOrderByWithRelationInput, {nullable:true})
    stat?: Identity<StatsOrderByWithRelationInput>;
}
