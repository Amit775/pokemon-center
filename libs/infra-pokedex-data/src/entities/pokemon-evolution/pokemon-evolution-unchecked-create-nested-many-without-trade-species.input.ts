import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutTradeSpeciesInput } from './pokemon-evolution-create-without-trade-species.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput } from './pokemon-evolution-create-or-connect-without-trade-species.input';
import { PokemonEvolutionCreateManyTradeSpeciesInputEnvelope } from './pokemon-evolution-create-many-trade-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionUncheckedCreateNestedManyWithoutTradeSpeciesInput {

    @Field(() => [PokemonEvolutionCreateWithoutTradeSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutTradeSpeciesInput)
    create?: Array<PokemonEvolutionCreateWithoutTradeSpeciesInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutTradeSpeciesInput>;

    @Field(() => PokemonEvolutionCreateManyTradeSpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyTradeSpeciesInputEnvelope)
    createMany?: PokemonEvolutionCreateManyTradeSpeciesInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
