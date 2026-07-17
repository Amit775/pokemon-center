import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesWhereInput } from './location-area-encounter-rates-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyLocationAreaEncounterRatesArgs {

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereInput)
    where?: LocationAreaEncounterRatesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
