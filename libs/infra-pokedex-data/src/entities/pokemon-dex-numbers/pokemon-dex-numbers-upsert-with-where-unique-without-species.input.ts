import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersUpdateWithoutSpeciesInput } from './pokemon-dex-numbers-update-without-species.input';
import { PokemonDexNumbersCreateWithoutSpeciesInput } from './pokemon-dex-numbers-create-without-species.input';

@InputType()
export class PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput {

    @Field(() => PokemonDexNumbersWhereUniqueInput, {nullable:false})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>;

    @Field(() => PokemonDexNumbersUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonDexNumbersUpdateWithoutSpeciesInput)
    update!: Identity<PokemonDexNumbersUpdateWithoutSpeciesInput>;

    @Field(() => PokemonDexNumbersCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonDexNumbersCreateWithoutSpeciesInput)
    create!: Identity<PokemonDexNumbersCreateWithoutSpeciesInput>;
}
