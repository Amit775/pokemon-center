import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsWhereInput } from './stats-where.input';

@InputType()
export class StatsScalarRelationFilter {

    @Field(() => StatsWhereInput, {nullable:true})
    is?: Identity<StatsWhereInput>;

    @Field(() => StatsWhereInput, {nullable:true})
    isNot?: Identity<StatsWhereInput>;
}
