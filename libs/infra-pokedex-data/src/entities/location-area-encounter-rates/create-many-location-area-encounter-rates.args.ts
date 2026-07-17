import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateManyInput } from './location-area-encounter-rates-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLocationAreaEncounterRatesArgs {

    @Field(() => [LocationAreaEncounterRatesCreateManyInput], {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateManyInput)
    data!: Array<LocationAreaEncounterRatesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
