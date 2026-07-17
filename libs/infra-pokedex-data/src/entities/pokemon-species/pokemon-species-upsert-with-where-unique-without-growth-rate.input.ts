import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutGrowthRateInput } from './pokemon-species-update-without-growth-rate.input';
import { PokemonSpeciesCreateWithoutGrowthRateInput } from './pokemon-species-create-without-growth-rate.input';

@InputType()
export class PokemonSpeciesUpsertWithWhereUniqueWithoutGrowthRateInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutGrowthRateInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutGrowthRateInput)
    update!: PokemonSpeciesUpdateWithoutGrowthRateInput;

    @Field(() => PokemonSpeciesCreateWithoutGrowthRateInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutGrowthRateInput)
    create!: PokemonSpeciesCreateWithoutGrowthRateInput;
}
