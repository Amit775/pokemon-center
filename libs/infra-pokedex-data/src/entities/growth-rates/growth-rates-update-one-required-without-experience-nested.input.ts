import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GrowthRatesCreateWithoutExperienceInput } from './growth-rates-create-without-experience.input';
import { Type } from 'class-transformer';
import { GrowthRatesCreateOrConnectWithoutExperienceInput } from './growth-rates-create-or-connect-without-experience.input';
import { GrowthRatesUpsertWithoutExperienceInput } from './growth-rates-upsert-without-experience.input';
import { Prisma } from '@prisma/client';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';
import { GrowthRatesUpdateToOneWithWhereWithoutExperienceInput } from './growth-rates-update-to-one-with-where-without-experience.input';

@InputType()
export class GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput {

    @Field(() => GrowthRatesCreateWithoutExperienceInput, {nullable:true})
    @Type(() => GrowthRatesCreateWithoutExperienceInput)
    create?: GrowthRatesCreateWithoutExperienceInput;

    @Field(() => GrowthRatesCreateOrConnectWithoutExperienceInput, {nullable:true})
    @Type(() => GrowthRatesCreateOrConnectWithoutExperienceInput)
    connectOrCreate?: GrowthRatesCreateOrConnectWithoutExperienceInput;

    @Field(() => GrowthRatesUpsertWithoutExperienceInput, {nullable:true})
    @Type(() => GrowthRatesUpsertWithoutExperienceInput)
    upsert?: GrowthRatesUpsertWithoutExperienceInput;

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:true})
    @Type(() => GrowthRatesWhereUniqueInput)
    connect?: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;

    @Field(() => GrowthRatesUpdateToOneWithWhereWithoutExperienceInput, {nullable:true})
    @Type(() => GrowthRatesUpdateToOneWithWhereWithoutExperienceInput)
    update?: GrowthRatesUpdateToOneWithWhereWithoutExperienceInput;
}
