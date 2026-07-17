import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput } from '../pokemon-species/pokemon-species-update-many-without-growth-rate-nested.input';

@InputType()
export class GrowthRatesUpdateWithoutExperienceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => String, {nullable:true})
    formula?: string;

    @Field(() => PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUpdateManyWithoutGrowthRateNestedInput>;
}
