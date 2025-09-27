import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacteristicsWhereInput } from './characteristics-where.input';
import { Type } from 'class-transformer';
import { CharacteristicsOrderByWithRelationInput } from './characteristics-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacteristicsCountAggregateInput } from './characteristics-count-aggregate.input';
import { CharacteristicsAvgAggregateInput } from './characteristics-avg-aggregate.input';
import { CharacteristicsSumAggregateInput } from './characteristics-sum-aggregate.input';
import { CharacteristicsMinAggregateInput } from './characteristics-min-aggregate.input';
import { CharacteristicsMaxAggregateInput } from './characteristics-max-aggregate.input';

@ArgsType()
export class CharacteristicsAggregateArgs {

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    @Type(() => CharacteristicsWhereInput)
    where?: CharacteristicsWhereInput;

    @Field(() => [CharacteristicsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacteristicsOrderByWithRelationInput>;

    @Field(() => CharacteristicsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CharacteristicsCountAggregateInput, {nullable:true})
    _count?: CharacteristicsCountAggregateInput;

    @Field(() => CharacteristicsAvgAggregateInput, {nullable:true})
    _avg?: CharacteristicsAvgAggregateInput;

    @Field(() => CharacteristicsSumAggregateInput, {nullable:true})
    _sum?: CharacteristicsSumAggregateInput;

    @Field(() => CharacteristicsMinAggregateInput, {nullable:true})
    _min?: CharacteristicsMinAggregateInput;

    @Field(() => CharacteristicsMaxAggregateInput, {nullable:true})
    _max?: CharacteristicsMaxAggregateInput;
}
