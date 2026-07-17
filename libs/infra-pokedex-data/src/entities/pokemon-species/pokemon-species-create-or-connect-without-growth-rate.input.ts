import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutGrowthRateInput } from './pokemon-species-create-without-growth-rate.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutGrowthRateInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutGrowthRateInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutGrowthRateInput)
    create!: PokemonSpeciesCreateWithoutGrowthRateInput;
}
