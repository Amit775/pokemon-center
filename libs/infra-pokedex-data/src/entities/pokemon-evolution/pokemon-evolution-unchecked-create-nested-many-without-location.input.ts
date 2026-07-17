import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateWithoutLocationInput } from './pokemon-evolution-create-without-location.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateOrConnectWithoutLocationInput } from './pokemon-evolution-create-or-connect-without-location.input';
import { PokemonEvolutionCreateManyLocationInputEnvelope } from './pokemon-evolution-create-many-location-input-envelope.input';
import { Prisma } from '@prisma/client';
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
    createMany?: PokemonEvolutionCreateManyLocationInputEnvelope;

    @Field(() => [PokemonEvolutionWhereUniqueInput], {nullable:true})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>>;
}
