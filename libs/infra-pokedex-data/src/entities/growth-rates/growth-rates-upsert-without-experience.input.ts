import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GrowthRatesUpdateWithoutExperienceInput } from './growth-rates-update-without-experience.input';
import { Type } from 'class-transformer';
import { GrowthRatesCreateWithoutExperienceInput } from './growth-rates-create-without-experience.input';
import { GrowthRatesWhereInput } from './growth-rates-where.input';

@InputType()
export class GrowthRatesUpsertWithoutExperienceInput {

    @Field(() => GrowthRatesUpdateWithoutExperienceInput, {nullable:false})
    @Type(() => GrowthRatesUpdateWithoutExperienceInput)
    update!: GrowthRatesUpdateWithoutExperienceInput;

    @Field(() => GrowthRatesCreateWithoutExperienceInput, {nullable:false})
    @Type(() => GrowthRatesCreateWithoutExperienceInput)
    create!: GrowthRatesCreateWithoutExperienceInput;

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: GrowthRatesWhereInput;
}
