import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesWhereInput } from './growth-rates-where.input';
import { Type } from 'class-transformer';
import { GrowthRatesUpdateWithoutExperienceInput } from './growth-rates-update-without-experience.input';

@InputType()
export class GrowthRatesUpdateToOneWithWhereWithoutExperienceInput {

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: Identity<GrowthRatesWhereInput>;

    @Field(() => GrowthRatesUpdateWithoutExperienceInput, {nullable:false})
    @Type(() => GrowthRatesUpdateWithoutExperienceInput)
    data!: Identity<GrowthRatesUpdateWithoutExperienceInput>;
}
