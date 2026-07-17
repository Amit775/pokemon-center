import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GrowthRatesCreateWithoutExperienceInput } from './growth-rates-create-without-experience.input';
import { Type } from 'class-transformer';
import { GrowthRatesCreateOrConnectWithoutExperienceInput } from './growth-rates-create-or-connect-without-experience.input';
import { Prisma } from '@prisma/client';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';

@InputType()
export class GrowthRatesCreateNestedOneWithoutExperienceInput {

    @Field(() => GrowthRatesCreateWithoutExperienceInput, {nullable:true})
    @Type(() => GrowthRatesCreateWithoutExperienceInput)
    create?: GrowthRatesCreateWithoutExperienceInput;

    @Field(() => GrowthRatesCreateOrConnectWithoutExperienceInput, {nullable:true})
    @Type(() => GrowthRatesCreateOrConnectWithoutExperienceInput)
    connectOrCreate?: GrowthRatesCreateOrConnectWithoutExperienceInput;

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:true})
    @Type(() => GrowthRatesWhereUniqueInput)
    connect?: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;
}
