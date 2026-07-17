import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GrowthRatesUpdateManyMutationInput } from './growth-rates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GrowthRatesWhereInput } from './growth-rates-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyGrowthRatesArgs {

    @Field(() => GrowthRatesUpdateManyMutationInput, {nullable:false})
    @Type(() => GrowthRatesUpdateManyMutationInput)
    data!: GrowthRatesUpdateManyMutationInput;

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: GrowthRatesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
