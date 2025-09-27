import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';
import { EncountersOrderByWithRelationInput } from './encounters-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncountersCountAggregateInput } from './encounters-count-aggregate.input';
import { EncountersAvgAggregateInput } from './encounters-avg-aggregate.input';
import { EncountersSumAggregateInput } from './encounters-sum-aggregate.input';
import { EncountersMinAggregateInput } from './encounters-min-aggregate.input';
import { EncountersMaxAggregateInput } from './encounters-max-aggregate.input';

@ArgsType()
export class EncountersAggregateArgs {

    @Field(() => EncountersWhereInput, {nullable:true})
    @Type(() => EncountersWhereInput)
    where?: EncountersWhereInput;

    @Field(() => [EncountersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncountersOrderByWithRelationInput>;

    @Field(() => EncountersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncountersCountAggregateInput, {nullable:true})
    _count?: EncountersCountAggregateInput;

    @Field(() => EncountersAvgAggregateInput, {nullable:true})
    _avg?: EncountersAvgAggregateInput;

    @Field(() => EncountersSumAggregateInput, {nullable:true})
    _sum?: EncountersSumAggregateInput;

    @Field(() => EncountersMinAggregateInput, {nullable:true})
    _min?: EncountersMinAggregateInput;

    @Field(() => EncountersMaxAggregateInput, {nullable:true})
    _max?: EncountersMaxAggregateInput;
}
