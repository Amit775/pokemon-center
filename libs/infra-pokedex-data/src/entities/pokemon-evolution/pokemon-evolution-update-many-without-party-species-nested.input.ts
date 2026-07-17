import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutPartySpeciesInput } from './pokemon-evolution-create-without-party-species.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput } from './pokemon-evolution-create-or-connect-without-party-species.input';
import { PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput } from './pokemon-evolution-upsert-with-where-unique-without-party-species.input';
import { PokemonEvolutionCreateManyPartySpeciesInputEnvelope } from './pokemon-evolution-create-many-party-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput } from './pokemon-evolution-update-with-where-unique-without-party-species.input';
import { PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput } from './pokemon-evolution-update-many-with-where-without-party-species.input';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput {

    @Field(() => [PokemonEvolutionCreateWithoutPartySpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutPartySpeciesInput)
    create?: Array<PokemonEvolutionCreateWithoutPartySpeciesInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutPartySpeciesInput>;

    @Field(() => [PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput)
    upsert?: Array<PokemonEvolutionUpsertWithWhereUniqueWithoutPartySpeciesInput>;

    @Field(() => PokemonEvolutionCreateManyPartySpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyPartySpeciesInputEnvelope)
    createMany?: PokemonEvolutionCreateManyPartySpeciesInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;

    @Field(() => [PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput)
    update?: Array<PokemonEvolutionUpdateWithWhereUniqueWithoutPartySpeciesInput>;

    @Field(() => [PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput], {nullable:true})
    @Type(() => PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput)
    updateMany?: Array<PokemonEvolutionUpdateManyWithWhereWithoutPartySpeciesInput>;

    @Field(() => [PokemonEvolutionScalarWhereInput], {nullable:true})
    @Type(() => PokemonEvolutionScalarWhereInput)
    deleteMany?: Array<PokemonEvolutionScalarWhereInput>;
}
