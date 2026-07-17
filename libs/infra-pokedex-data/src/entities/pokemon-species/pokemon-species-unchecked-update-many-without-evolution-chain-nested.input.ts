import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutEvolutionChainInput } from './pokemon-species-create-without-evolution-chain.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput } from './pokemon-species-create-or-connect-without-evolution-chain.input';
import { PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput } from './pokemon-species-upsert-with-where-unique-without-evolution-chain.input';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateManyEvolutionChainInputEnvelope } from './pokemon-species-create-many-evolution-chain-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput } from './pokemon-species-update-with-where-unique-without-evolution-chain.input';
import { PokemonSpeciesUpdateManyWithWhereWithoutEvolutionChainInput } from './pokemon-species-update-many-with-where-without-evolution-chain.input';
import { PokemonSpeciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class PokemonSpeciesUncheckedUpdateManyWithoutEvolutionChainNestedInput {

    @Field(() => [PokemonSpeciesCreateWithoutEvolutionChainInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEvolutionChainInput)
    create?: Array<PokemonSpeciesCreateWithoutEvolutionChainInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutEvolutionChainInput>;

    @Field(() => [PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput], {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput)
    upsert?: Array<PokemonSpeciesUpsertWithWhereUniqueWithoutEvolutionChainInput>;

    @Field(() => PokemonSpeciesCreateManyEvolutionChainInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyEvolutionChainInputEnvelope)
    createMany?: Identity<PokemonSpeciesCreateManyEvolutionChainInputEnvelope>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput)
    update?: Array<PokemonSpeciesUpdateWithWhereUniqueWithoutEvolutionChainInput>;

    @Field(() => [PokemonSpeciesUpdateManyWithWhereWithoutEvolutionChainInput], {nullable:true})
    @Type(() => PokemonSpeciesUpdateManyWithWhereWithoutEvolutionChainInput)
    updateMany?: Array<PokemonSpeciesUpdateManyWithWhereWithoutEvolutionChainInput>;

    @Field(() => [PokemonSpeciesScalarWhereInput], {nullable:true})
    @Type(() => PokemonSpeciesScalarWhereInput)
    deleteMany?: Array<PokemonSpeciesScalarWhereInput>;
}
