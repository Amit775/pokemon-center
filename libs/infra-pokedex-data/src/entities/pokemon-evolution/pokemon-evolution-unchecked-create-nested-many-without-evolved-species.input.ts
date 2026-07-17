import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutEvolvedSpeciesInput } from './pokemon-evolution-create-without-evolved-species.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput } from './pokemon-evolution-create-or-connect-without-evolved-species.input';
import { PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope } from './pokemon-evolution-create-many-evolved-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionUncheckedCreateNestedManyWithoutEvolvedSpeciesInput {

    @Field(() => [PokemonEvolutionCreateWithoutEvolvedSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutEvolvedSpeciesInput)
    create?: Array<PokemonEvolutionCreateWithoutEvolvedSpeciesInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutEvolvedSpeciesInput>;

    @Field(() => PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope)
    createMany?: PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
