import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutGrowthRateInput } from './pokemon-species-create-without-growth-rate.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutGrowthRateInput } from './pokemon-species-create-or-connect-without-growth-rate.input';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateManyGrowthRateInputEnvelope } from './pokemon-species-create-many-growth-rate-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesUncheckedCreateNestedManyWithoutGrowthRateInput {

    @Field(() => [PokemonSpeciesCreateWithoutGrowthRateInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutGrowthRateInput)
    create?: Array<PokemonSpeciesCreateWithoutGrowthRateInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutGrowthRateInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutGrowthRateInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutGrowthRateInput>;

    @Field(() => PokemonSpeciesCreateManyGrowthRateInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyGrowthRateInputEnvelope)
    createMany?: Identity<PokemonSpeciesCreateManyGrowthRateInputEnvelope>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;
}
