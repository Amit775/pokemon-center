import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutColorInput } from './pokemon-species-create-without-color.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutColorInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutColorInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutColorInput)
    create!: Identity<PokemonSpeciesCreateWithoutColorInput>;
}
