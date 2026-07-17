import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GrowthRatesUpdateInput } from './growth-rates-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';

@ArgsType()
export class UpdateOneGrowthRatesArgs {

    @Field(() => GrowthRatesUpdateInput, {nullable:false})
    @Type(() => GrowthRatesUpdateInput)
    data!: GrowthRatesUpdateInput;

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:false})
    @Type(() => GrowthRatesWhereUniqueInput)
    where!: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;
}
