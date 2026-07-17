import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GrowthRatesWhereInput } from './growth-rates-where.input';
import { Type } from 'class-transformer';
import { GrowthRatesUpdateWithoutSpeciesInput } from './growth-rates-update-without-species.input';

@InputType()
export class GrowthRatesUpdateToOneWithWhereWithoutSpeciesInput {

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: GrowthRatesWhereInput;

    @Field(() => GrowthRatesUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => GrowthRatesUpdateWithoutSpeciesInput)
    data!: GrowthRatesUpdateWithoutSpeciesInput;
}
