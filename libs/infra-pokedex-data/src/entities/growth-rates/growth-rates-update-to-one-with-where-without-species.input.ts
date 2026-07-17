import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesWhereInput } from './growth-rates-where.input';
import { Type } from 'class-transformer';
import { GrowthRatesUpdateWithoutSpeciesInput } from './growth-rates-update-without-species.input';

@InputType()
export class GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput {

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: Identity<GrowthRatesWhereInput>;

    @Field(() => GrowthRatesUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => GrowthRatesUpdateWithoutSpeciesInput)
    data!: Identity<GrowthRatesUpdateWithoutSpeciesInput>;
}
