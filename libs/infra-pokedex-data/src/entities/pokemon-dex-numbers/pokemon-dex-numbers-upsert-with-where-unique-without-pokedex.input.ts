import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersUpdateWithoutPokedexInput } from './pokemon-dex-numbers-update-without-pokedex.input';
import { PokemonDexNumbersCreateWithoutPokedexInput } from './pokemon-dex-numbers-create-without-pokedex.input';

@InputType()
export class PokemonDexNumbersUpsertWithWhereUniqueWithoutPokedexInput {

    @Field(() => PokemonDexNumbersWhereUniqueInput, {nullable:false})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>;

    @Field(() => PokemonDexNumbersUpdateWithoutPokedexInput, {nullable:false})
    @Type(() => PokemonDexNumbersUpdateWithoutPokedexInput)
    update!: PokemonDexNumbersUpdateWithoutPokedexInput;

    @Field(() => PokemonDexNumbersCreateWithoutPokedexInput, {nullable:false})
    @Type(() => PokemonDexNumbersCreateWithoutPokedexInput)
    create!: PokemonDexNumbersCreateWithoutPokedexInput;
}
