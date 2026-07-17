import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesCreateInput } from './growth-rates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGrowthRatesArgs {

    @Field(() => GrowthRatesCreateInput, {nullable:false})
    @Type(() => GrowthRatesCreateInput)
    data!: Identity<GrowthRatesCreateInput>;
}
