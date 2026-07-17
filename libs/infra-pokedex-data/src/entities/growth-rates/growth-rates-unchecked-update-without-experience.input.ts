import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedUpdateManyWithoutGrowthRateNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-growth-rate-nested.input';

@InputType()
export class GrowthRatesUncheckedUpdateWithoutExperienceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => String, {nullable:true})
    formula?: string;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutGrowthRateNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUncheckedUpdateManyWithoutGrowthRateNestedInput>;
}
