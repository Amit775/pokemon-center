import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutPartySpeciesInput } from './pokemon-species-create-without-party-species.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput } from './pokemon-species-create-or-connect-without-party-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput {

    @Field(() => PokemonSpeciesCreateWithoutPartySpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutPartySpeciesInput)
    create?: Identity<PokemonSpeciesCreateWithoutPartySpeciesInput>;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput)
    connectOrCreate?: Identity<PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
