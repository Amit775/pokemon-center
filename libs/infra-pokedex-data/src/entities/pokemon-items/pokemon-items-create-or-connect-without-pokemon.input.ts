import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonItemsCreateWithoutPokemonInput } from './pokemon-items-create-without-pokemon.input';

@InputType()
export class PokemonItemsCreateOrConnectWithoutPokemonInput {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonItemsCreateWithoutPokemonInput)
    create!: Identity<PokemonItemsCreateWithoutPokemonInput>;
}
