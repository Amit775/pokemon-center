import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GrowthRatesWhereInput } from './growth-rates-where.input';

@InputType()
export class GrowthRatesScalarRelationFilter {

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    is?: GrowthRatesWhereInput;

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    isNot?: GrowthRatesWhereInput;
}
