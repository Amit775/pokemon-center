import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AbilitiesWhereInput } from './abilities-where.input';
import { Type } from 'class-transformer';
import { AbilitiesOrderByWithRelationInput } from './abilities-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AbilitiesCountAggregateInput } from './abilities-count-aggregate.input';
import { AbilitiesAvgAggregateInput } from './abilities-avg-aggregate.input';
import { AbilitiesSumAggregateInput } from './abilities-sum-aggregate.input';
import { AbilitiesMinAggregateInput } from './abilities-min-aggregate.input';
import { AbilitiesMaxAggregateInput } from './abilities-max-aggregate.input';

@ArgsType()
export class AbilitiesAggregateArgs {

    @Field(() => AbilitiesWhereInput, {nullable:true})
    @Type(() => AbilitiesWhereInput)
    where?: AbilitiesWhereInput;

    @Field(() => [AbilitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AbilitiesOrderByWithRelationInput>;

    @Field(() => AbilitiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AbilitiesCountAggregateInput, {nullable:true})
    _count?: AbilitiesCountAggregateInput;

    @Field(() => AbilitiesAvgAggregateInput, {nullable:true})
    _avg?: AbilitiesAvgAggregateInput;

    @Field(() => AbilitiesSumAggregateInput, {nullable:true})
    _sum?: AbilitiesSumAggregateInput;

    @Field(() => AbilitiesMinAggregateInput, {nullable:true})
    _min?: AbilitiesMinAggregateInput;

    @Field(() => AbilitiesMaxAggregateInput, {nullable:true})
    _max?: AbilitiesMaxAggregateInput;
}
