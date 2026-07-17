import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateWithoutColorInput } from './pokemon-species-update-without-color.input';
import { PokemonSpeciesCreateWithoutColorInput } from './pokemon-species-create-without-color.input';

@InputType()
export class PokemonSpeciesUpsertWithWhereUniqueWithoutColorInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutColorInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutColorInput)
    update!: Identity<PokemonSpeciesUpdateWithoutColorInput>;

    @Field(() => PokemonSpeciesCreateWithoutColorInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutColorInput)
    create!: Identity<PokemonSpeciesCreateWithoutColorInput>;
}
