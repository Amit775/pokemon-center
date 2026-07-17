import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GrowthRatesCreateWithoutExperienceInput } from './growth-rates-create-without-experience.input';

@InputType()
export class GrowthRatesCreateOrConnectWithoutExperienceInput {

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:false})
    @Type(() => GrowthRatesWhereUniqueInput)
    where!: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;

    @Field(() => GrowthRatesCreateWithoutExperienceInput, {nullable:false})
    @Type(() => GrowthRatesCreateWithoutExperienceInput)
    create!: Identity<GrowthRatesCreateWithoutExperienceInput>;
}
