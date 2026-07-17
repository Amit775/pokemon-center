import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesUpdateWithoutPokemonInput } from './pokemon-abilities-update-without-pokemon.input';
import { PokemonAbilitiesCreateWithoutPokemonInput } from './pokemon-abilities-create-without-pokemon.input';

@InputType()
export class PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonAbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>;

    @Field(() => PokemonAbilitiesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonAbilitiesUpdateWithoutPokemonInput)
    update!: PokemonAbilitiesUpdateWithoutPokemonInput;

    @Field(() => PokemonAbilitiesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonAbilitiesCreateWithoutPokemonInput)
    create!: PokemonAbilitiesCreateWithoutPokemonInput;
}
