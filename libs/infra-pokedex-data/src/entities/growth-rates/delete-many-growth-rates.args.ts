import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GrowthRatesWhereInput } from './growth-rates-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyGrowthRatesArgs {

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: GrowthRatesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
