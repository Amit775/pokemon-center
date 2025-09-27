import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeGameIndicesWhereInput } from './type-game-indices-where.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesOrderByWithRelationInput } from './type-game-indices-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TypeGameIndicesCountAggregateInput } from './type-game-indices-count-aggregate.input';
import { TypeGameIndicesAvgAggregateInput } from './type-game-indices-avg-aggregate.input';
import { TypeGameIndicesSumAggregateInput } from './type-game-indices-sum-aggregate.input';
import { TypeGameIndicesMinAggregateInput } from './type-game-indices-min-aggregate.input';
import { TypeGameIndicesMaxAggregateInput } from './type-game-indices-max-aggregate.input';

@ArgsType()
export class TypeGameIndicesAggregateArgs {

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    @Type(() => TypeGameIndicesWhereInput)
    where?: TypeGameIndicesWhereInput;

    @Field(() => [TypeGameIndicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TypeGameIndicesOrderByWithRelationInput>;

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TypeGameIndicesCountAggregateInput, {nullable:true})
    _count?: TypeGameIndicesCountAggregateInput;

    @Field(() => TypeGameIndicesAvgAggregateInput, {nullable:true})
    _avg?: TypeGameIndicesAvgAggregateInput;

    @Field(() => TypeGameIndicesSumAggregateInput, {nullable:true})
    _sum?: TypeGameIndicesSumAggregateInput;

    @Field(() => TypeGameIndicesMinAggregateInput, {nullable:true})
    _min?: TypeGameIndicesMinAggregateInput;

    @Field(() => TypeGameIndicesMaxAggregateInput, {nullable:true})
    _max?: TypeGameIndicesMaxAggregateInput;
}
