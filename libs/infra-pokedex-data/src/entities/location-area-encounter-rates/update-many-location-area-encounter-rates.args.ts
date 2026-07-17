import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesUpdateManyMutationInput } from './location-area-encounter-rates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesWhereInput } from './location-area-encounter-rates-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyLocationAreaEncounterRatesArgs {

    @Field(() => LocationAreaEncounterRatesUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesUpdateManyMutationInput)
    data!: Identity<LocationAreaEncounterRatesUpdateManyMutationInput>;

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereInput)
    where?: Identity<LocationAreaEncounterRatesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
