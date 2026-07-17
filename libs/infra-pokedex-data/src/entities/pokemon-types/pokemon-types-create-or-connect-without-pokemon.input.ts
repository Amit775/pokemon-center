import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonTypesCreateWithoutPokemonInput } from './pokemon-types-create-without-pokemon.input';

@InputType()
export class PokemonTypesCreateOrConnectWithoutPokemonInput {

    @Field(() => PokemonTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>;

    @Field(() => PokemonTypesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonTypesCreateWithoutPokemonInput)
    create!: PokemonTypesCreateWithoutPokemonInput;
}
