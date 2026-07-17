import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonTypesUpdateWithoutPokemonInput } from './pokemon-types-update-without-pokemon.input';

@InputType()
export class PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>;

    @Field(() => PokemonTypesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonTypesUpdateWithoutPokemonInput)
    data!: PokemonTypesUpdateWithoutPokemonInput;
}
