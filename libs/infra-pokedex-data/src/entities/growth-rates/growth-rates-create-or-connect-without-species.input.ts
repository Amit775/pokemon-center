import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Type } from 'class-transformer';
import { GrowthRatesCreateWithoutSpeciesInput } from './growth-rates-create-without-species.input';

@InputType()
export class GrowthRatesCreateOrConnectWithoutSpeciesInput {

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:false})
    @Type(() => GrowthRatesWhereUniqueInput)
    where!: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;

    @Field(() => GrowthRatesCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => GrowthRatesCreateWithoutSpeciesInput)
    create!: GrowthRatesCreateWithoutSpeciesInput;
}
