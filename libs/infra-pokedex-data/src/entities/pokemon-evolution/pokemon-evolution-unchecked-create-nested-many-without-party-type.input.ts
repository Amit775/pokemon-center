import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutPartyTypeInput } from './pokemon-evolution-create-without-party-type.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutPartyTypeInput } from './pokemon-evolution-create-or-connect-without-party-type.input';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCreateManyPartyTypeInputEnvelope } from './pokemon-evolution-create-many-party-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionUncheckedCreateNestedManyWithoutPartyTypeInput {

    @Field(() => [PokemonEvolutionCreateWithoutPartyTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutPartyTypeInput)
    create?: Array<PokemonEvolutionCreateWithoutPartyTypeInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutPartyTypeInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutPartyTypeInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutPartyTypeInput>;

    @Field(() => PokemonEvolutionCreateManyPartyTypeInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyPartyTypeInputEnvelope)
    createMany?: Identity<PokemonEvolutionCreateManyPartyTypeInputEnvelope>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
