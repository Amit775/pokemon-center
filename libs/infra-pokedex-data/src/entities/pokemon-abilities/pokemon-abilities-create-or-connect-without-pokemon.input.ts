import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesCreateWithoutPokemonInput } from './pokemon-abilities-create-without-pokemon.input';

@InputType()
export class PokemonAbilitiesCreateOrConnectWithoutPokemonInput {

    @Field(() => PokemonAbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>;

    @Field(() => PokemonAbilitiesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonAbilitiesCreateWithoutPokemonInput)
    create!: PokemonAbilitiesCreateWithoutPokemonInput;
}
