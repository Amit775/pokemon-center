import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GrowthRatesCreateInput } from './growth-rates-create.input';
import { GrowthRatesUpdateInput } from './growth-rates-update.input';

@ArgsType()
export class UpsertOneGrowthRatesArgs {

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:false})
    @Type(() => GrowthRatesWhereUniqueInput)
    where!: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;

    @Field(() => GrowthRatesCreateInput, {nullable:false})
    @Type(() => GrowthRatesCreateInput)
    create!: Identity<GrowthRatesCreateInput>;

    @Field(() => GrowthRatesUpdateInput, {nullable:false})
    @Type(() => GrowthRatesUpdateInput)
    update!: Identity<GrowthRatesUpdateInput>;
}
