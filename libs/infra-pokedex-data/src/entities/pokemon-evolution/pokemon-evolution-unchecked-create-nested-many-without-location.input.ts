import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutLocationInput } from './pokemon-evolution-create-without-location.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutLocationInput } from './pokemon-evolution-create-or-connect-without-location.input';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCreateManyLocationInputEnvelope } from './pokemon-evolution-create-many-location-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class PokemonEvolutionUncheckedCreateNestedManyWithoutLocationInput {

    @Field(() => [PokemonEvolutionCreateWithoutLocationInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateWithoutLocationInput)
    create?: Array<PokemonEvolutionCreateWithoutLocationInput>;

    @Field(() => [PokemonEvolutionCreateOrConnectWithoutLocationInput], {nullable:true})
    @Type(() => PokemonEvolutionCreateOrConnectWithoutLocationInput)
    connectOrCreate?: Array<PokemonEvolutionCreateOrConnectWithoutLocationInput>;

    @Field(() => PokemonEvolutionCreateManyLocationInputEnvelope, {nullable:true})
    @Type(() => PokemonEvolutionCreateManyLocationInputEnvelope)
    createMany?: Identity<PokemonEvolutionCreateManyLocationInputEnvelope>;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
