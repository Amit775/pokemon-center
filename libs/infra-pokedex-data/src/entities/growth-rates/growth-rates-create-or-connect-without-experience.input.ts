import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Type } from 'class-transformer';
import { GrowthRatesCreateWithoutExperienceInput } from './growth-rates-create-without-experience.input';

@InputType()
export class GrowthRatesCreateOrConnectWithoutExperienceInput {

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:false})
    @Type(() => GrowthRatesWhereUniqueInput)
    where!: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;

    @Field(() => GrowthRatesCreateWithoutExperienceInput, {nullable:false})
    @Type(() => GrowthRatesCreateWithoutExperienceInput)
    create!: GrowthRatesCreateWithoutExperienceInput;
}
