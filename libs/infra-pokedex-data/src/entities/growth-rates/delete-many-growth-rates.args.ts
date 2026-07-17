import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesWhereInput } from './growth-rates-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyGrowthRatesArgs {

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: Identity<GrowthRatesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
