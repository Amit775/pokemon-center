import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NaturesWhereInput } from './natures-where.input';
import { Type } from 'class-transformer';
import { NaturesOrderByWithRelationInput } from './natures-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NaturesCountAggregateInput } from './natures-count-aggregate.input';
import { NaturesAvgAggregateInput } from './natures-avg-aggregate.input';
import { NaturesSumAggregateInput } from './natures-sum-aggregate.input';
import { NaturesMinAggregateInput } from './natures-min-aggregate.input';
import { NaturesMaxAggregateInput } from './natures-max-aggregate.input';

@ArgsType()
export class NaturesAggregateArgs {

    @Field(() => NaturesWhereInput, {nullable:true})
    @Type(() => NaturesWhereInput)
    where?: NaturesWhereInput;

    @Field(() => [NaturesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NaturesOrderByWithRelationInput>;

    @Field(() => NaturesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NaturesCountAggregateInput, {nullable:true})
    _count?: NaturesCountAggregateInput;

    @Field(() => NaturesAvgAggregateInput, {nullable:true})
    _avg?: NaturesAvgAggregateInput;

    @Field(() => NaturesSumAggregateInput, {nullable:true})
    _sum?: NaturesSumAggregateInput;

    @Field(() => NaturesMinAggregateInput, {nullable:true})
    _min?: NaturesMinAggregateInput;

    @Field(() => NaturesMaxAggregateInput, {nullable:true})
    _max?: NaturesMaxAggregateInput;
}
