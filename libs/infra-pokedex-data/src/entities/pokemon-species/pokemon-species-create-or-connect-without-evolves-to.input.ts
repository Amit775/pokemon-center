import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutEvolvesToInput } from './pokemon-species-create-without-evolves-to.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutEvolvesToInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutEvolvesToInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEvolvesToInput)
    create!: Identity<PokemonSpeciesCreateWithoutEvolvesToInput>;
}
