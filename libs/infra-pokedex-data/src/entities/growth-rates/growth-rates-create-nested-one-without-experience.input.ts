import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesCreateWithoutExperienceInput } from './growth-rates-create-without-experience.input';
import { Type } from 'class-transformer';
import { GrowthRatesCreateOrConnectWithoutExperienceInput } from './growth-rates-create-or-connect-without-experience.input';
import { Prisma } from '@pokemon-center/prisma';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';

@InputType()
export class GrowthRatesCreateNestedOneWithoutExperienceInput {

    @Field(() => GrowthRatesCreateWithoutExperienceInput, {nullable:true})
    @Type(() => GrowthRatesCreateWithoutExperienceInput)
    create?: Identity<GrowthRatesCreateWithoutExperienceInput>;

    @Field(() => GrowthRatesCreateOrConnectWithoutExperienceInput, {nullable:true})
    @Type(() => GrowthRatesCreateOrConnectWithoutExperienceInput)
    connectOrCreate?: Identity<GrowthRatesCreateOrConnectWithoutExperienceInput>;

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:true})
    @Type(() => GrowthRatesWhereUniqueInput)
    connect?: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;
}
