import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGrowthRatesArgs {

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:false})
    @Type(() => GrowthRatesWhereUniqueInput)
    where!: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;
}
