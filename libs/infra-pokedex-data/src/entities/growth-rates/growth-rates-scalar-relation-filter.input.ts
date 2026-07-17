import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesWhereInput } from './growth-rates-where.input';

@InputType()
export class GrowthRatesScalarRelationFilter {

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    is?: Identity<GrowthRatesWhereInput>;

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    isNot?: Identity<GrowthRatesWhereInput>;
}
