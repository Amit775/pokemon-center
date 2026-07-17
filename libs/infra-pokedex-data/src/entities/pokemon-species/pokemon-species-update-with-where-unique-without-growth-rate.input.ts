import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateWithoutGrowthRateInput } from './pokemon-species-update-without-growth-rate.input';

@InputType()
export class PokemonSpeciesUpdateWithWhereUniqueWithoutGrowthRateInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutGrowthRateInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutGrowthRateInput)
    data!: Identity<PokemonSpeciesUpdateWithoutGrowthRateInput>;
}
