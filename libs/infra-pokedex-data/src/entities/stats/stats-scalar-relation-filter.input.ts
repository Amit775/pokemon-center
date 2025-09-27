import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsWhereInput } from './stats-where.input';

@InputType()
export class StatsScalarRelationFilter {

    @Field(() => StatsWhereInput, {nullable:true})
    is?: StatsWhereInput;

    @Field(() => StatsWhereInput, {nullable:true})
    isNot?: StatsWhereInput;
}
