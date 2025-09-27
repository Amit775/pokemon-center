import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GrowthRatesWhereInput } from './growth-rates-where.input';
import { Type } from 'class-transformer';
import { GrowthRatesOrderByWithRelationInput } from './growth-rates-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GrowthRatesScalarFieldEnum } from './growth-rates-scalar-field.enum';

@ArgsType()
export class FindFirstGrowthRatesOrThrowArgs {

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: GrowthRatesWhereInput;

    @Field(() => [GrowthRatesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GrowthRatesOrderByWithRelationInput>;

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GrowthRatesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${GrowthRatesScalarFieldEnum}`>;
}
