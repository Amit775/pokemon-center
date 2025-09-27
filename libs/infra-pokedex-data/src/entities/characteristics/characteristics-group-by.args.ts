import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacteristicsWhereInput } from './characteristics-where.input';
import { Type } from 'class-transformer';
import { CharacteristicsOrderByWithAggregationInput } from './characteristics-order-by-with-aggregation.input';
import { CharacteristicsScalarFieldEnum } from './characteristics-scalar-field.enum';
import { CharacteristicsScalarWhereWithAggregatesInput } from './characteristics-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CharacteristicsCountAggregateInput } from './characteristics-count-aggregate.input';
import { CharacteristicsAvgAggregateInput } from './characteristics-avg-aggregate.input';
import { CharacteristicsSumAggregateInput } from './characteristics-sum-aggregate.input';
import { CharacteristicsMinAggregateInput } from './characteristics-min-aggregate.input';
import { CharacteristicsMaxAggregateInput } from './characteristics-max-aggregate.input';

@ArgsType()
export class CharacteristicsGroupByArgs {

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    @Type(() => CharacteristicsWhereInput)
    where?: CharacteristicsWhereInput;

    @Field(() => [CharacteristicsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CharacteristicsOrderByWithAggregationInput>;

    @Field(() => [CharacteristicsScalarFieldEnum], {nullable:false})
    by!: Array<`${CharacteristicsScalarFieldEnum}`>;

    @Field(() => CharacteristicsScalarWhereWithAggregatesInput, {nullable:true})
    having?: CharacteristicsScalarWhereWithAggregatesInput;

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
