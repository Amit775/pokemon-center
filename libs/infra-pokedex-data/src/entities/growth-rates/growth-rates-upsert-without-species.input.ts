import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesUpdateWithoutSpeciesInput } from './growth-rates-update-without-species.input';
import { Type } from 'class-transformer';
import { GrowthRatesCreateWithoutSpeciesInput } from './growth-rates-create-without-species.input';
import { GrowthRatesWhereInput } from './growth-rates-where.input';

@InputType()
export class GrowthRatesUpsertWithoutSpeciesInput {

    @Field(() => GrowthRatesUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => GrowthRatesUpdateWithoutSpeciesInput)
    update!: Identity<GrowthRatesUpdateWithoutSpeciesInput>;

    @Field(() => GrowthRatesCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => GrowthRatesCreateWithoutSpeciesInput)
    create!: Identity<GrowthRatesCreateWithoutSpeciesInput>;

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: Identity<GrowthRatesWhereInput>;
}
