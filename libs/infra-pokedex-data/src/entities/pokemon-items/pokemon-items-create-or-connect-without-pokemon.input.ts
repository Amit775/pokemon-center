import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonItemsCreateWithoutPokemonInput } from './pokemon-items-create-without-pokemon.input';

@InputType()
export class PokemonItemsCreateOrConnectWithoutPokemonInput {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonItemsCreateWithoutPokemonInput)
    create!: PokemonItemsCreateWithoutPokemonInput;
}
