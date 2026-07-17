import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonUpdateWithoutSpeciesInput } from './pokemon-update-without-species.input';
import { PokemonCreateWithoutSpeciesInput } from './pokemon-create-without-species.input';

@InputType()
export class PokemonUpsertWithWhereUniqueWithoutSpeciesInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutSpeciesInput)
    update!: Identity<PokemonUpdateWithoutSpeciesInput>;

    @Field(() => PokemonCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutSpeciesInput)
    create!: Identity<PokemonCreateWithoutSpeciesInput>;
}
