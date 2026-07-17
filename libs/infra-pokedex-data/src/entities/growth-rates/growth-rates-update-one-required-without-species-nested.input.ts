import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GrowthRatesCreateWithoutSpeciesInput } from './growth-rates-create-without-species.input';
import { Type } from 'class-transformer';
import { GrowthRatesCreateOrConnectWithoutSpeciesInput } from './growth-rates-create-or-connect-without-species.input';
import { GrowthRatesUpsertWithoutSpeciesInput } from './growth-rates-upsert-without-species.input';
import { Prisma } from '@prisma/client';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';
import { GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput } from './growth-rates-update-to-one-with-where-without-species.input';

@InputType()
export class GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput {

    @Field(() => GrowthRatesCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => GrowthRatesCreateWithoutSpeciesInput)
    create?: GrowthRatesCreateWithoutSpeciesInput;

    @Field(() => GrowthRatesCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => GrowthRatesCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: GrowthRatesCreateOrConnectWithoutSpeciesInput;

    @Field(() => GrowthRatesUpsertWithoutSpeciesInput, {nullable:true})
    @Type(() => GrowthRatesUpsertWithoutSpeciesInput)
    upsert?: GrowthRatesUpsertWithoutSpeciesInput;

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:true})
    @Type(() => GrowthRatesWhereUniqueInput)
    connect?: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;

    @Field(() => GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput, {nullable:true})
    @Type(() => GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput)
    update?: GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput;
}
