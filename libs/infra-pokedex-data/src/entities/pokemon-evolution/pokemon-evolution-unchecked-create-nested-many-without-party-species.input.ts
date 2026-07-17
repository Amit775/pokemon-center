import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutPartySpeciesInput } from './pokemon-evolution-create-without-party-species.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput } from './pokemon-evolution-create-or-connect-without-party-species.input';
import { PokemonEvolutionCreateManyPartySpeciesInputEnvelope } from './pokemon-evolution-create-many-party-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionUncheckedCreateNestedManyWithoutPartySpeciesInput {

    @Field(() => [PokemonEvolutionCreateWithoutPartySpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutPartySpeciesInput)
    create?: Array<PokemonEvolutionCreateWithoutPartySpeciesInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput>;

    @Field(() => PokemonEvolutionCreateManyPartySpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyPartySpeciesInputEnvelope)
    createMany?: PokemonEvolutionCreateManyPartySpeciesInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
