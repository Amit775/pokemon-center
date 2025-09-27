import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesOrderByWithRelationInput } from './move-damage-classes-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveDamageClassesCountAggregateInput } from './move-damage-classes-count-aggregate.input';
import { MoveDamageClassesAvgAggregateInput } from './move-damage-classes-avg-aggregate.input';
import { MoveDamageClassesSumAggregateInput } from './move-damage-classes-sum-aggregate.input';
import { MoveDamageClassesMinAggregateInput } from './move-damage-classes-min-aggregate.input';
import { MoveDamageClassesMaxAggregateInput } from './move-damage-classes-max-aggregate.input';

@ArgsType()
export class MoveDamageClassesAggregateArgs {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: MoveDamageClassesWhereInput;

    @Field(() => [MoveDamageClassesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveDamageClassesOrderByWithRelationInput>;

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveDamageClassesCountAggregateInput, {nullable:true})
    _count?: MoveDamageClassesCountAggregateInput;

    @Field(() => MoveDamageClassesAvgAggregateInput, {nullable:true})
    _avg?: MoveDamageClassesAvgAggregateInput;

    @Field(() => MoveDamageClassesSumAggregateInput, {nullable:true})
    _sum?: MoveDamageClassesSumAggregateInput;

    @Field(() => MoveDamageClassesMinAggregateInput, {nullable:true})
    _min?: MoveDamageClassesMinAggregateInput;

    @Field(() => MoveDamageClassesMaxAggregateInput, {nullable:true})
    _max?: MoveDamageClassesMaxAggregateInput;
}
