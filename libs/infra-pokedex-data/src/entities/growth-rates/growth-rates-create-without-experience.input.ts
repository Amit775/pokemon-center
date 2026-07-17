import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesCreateNestedManyWithoutGrowthRateInput } from '../pokemon-species/pokemon-species-create-nested-many-without-growth-rate.input';

@InputType()
export class GrowthRatesCreateWithoutExperienceInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutGrowthRateInput, {nullable:true})
    species?: PokemonSpeciesCreateNestedManyWithoutGrowthRateInput;
}
