import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesCreateWithoutSpeciesInput } from './growth-rates-create-without-species.input';
import { Type } from 'class-transformer';
import { GrowthRatesCreateOrConnectWithoutSpeciesInput } from './growth-rates-create-or-connect-without-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';

@InputType()
export class GrowthRatesCreateNestedOneWithoutSpeciesInput {

    @Field(() => GrowthRatesCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => GrowthRatesCreateWithoutSpeciesInput)
    create?: Identity<GrowthRatesCreateWithoutSpeciesInput>;

    @Field(() => GrowthRatesCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => GrowthRatesCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<GrowthRatesCreateOrConnectWithoutSpeciesInput>;

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:true})
    @Type(() => GrowthRatesWhereUniqueInput)
    connect?: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;
}
