import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersCreateWithoutSpeciesInput } from './pokemon-dex-numbers-create-without-species.input';

@InputType()
export class PokemonDexNumbersCreateOrConnectWithoutSpeciesInput {

    @Field(() => PokemonDexNumbersWhereUniqueInput, {nullable:false})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>;

    @Field(() => PokemonDexNumbersCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonDexNumbersCreateWithoutSpeciesInput)
    create!: PokemonDexNumbersCreateWithoutSpeciesInput;
}
