import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonItemsUpdateWithoutPokemonInput } from './pokemon-items-update-without-pokemon.input';
import { PokemonItemsCreateWithoutPokemonInput } from './pokemon-items-create-without-pokemon.input';

@InputType()
export class PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonItemsUpdateWithoutPokemonInput)
    update!: Identity<PokemonItemsUpdateWithoutPokemonInput>;

    @Field(() => PokemonItemsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonItemsCreateWithoutPokemonInput)
    create!: Identity<PokemonItemsCreateWithoutPokemonInput>;
}
