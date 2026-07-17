import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutPartySpeciesInput } from './pokemon-species-create-without-party-species.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutPartySpeciesInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutPartySpeciesInput)
    create!: Identity<PokemonSpeciesCreateWithoutPartySpeciesInput>;
}
