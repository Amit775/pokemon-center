import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesUpdateManyMutationInput } from './growth-rates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GrowthRatesWhereInput } from './growth-rates-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyGrowthRatesArgs {

    @Field(() => GrowthRatesUpdateManyMutationInput, {nullable:false})
    @Type(() => GrowthRatesUpdateManyMutationInput)
    data!: Identity<GrowthRatesUpdateManyMutationInput>;

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: Identity<GrowthRatesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
