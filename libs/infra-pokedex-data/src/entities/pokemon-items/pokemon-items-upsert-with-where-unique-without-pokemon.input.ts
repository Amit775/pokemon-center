import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonItemsUpdateWithoutPokemonInput } from './pokemon-items-update-without-pokemon.input';
import { PokemonItemsCreateWithoutPokemonInput } from './pokemon-items-create-without-pokemon.input';

@InputType()
export class PokemonItemsUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonItemsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => PokemonItemsUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonItemsUpdateWithoutPokemonInput)
    update!: PokemonItemsUpdateWithoutPokemonInput;

    @Field(() => PokemonItemsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonItemsCreateWithoutPokemonInput)
    create!: PokemonItemsCreateWithoutPokemonInput;
}
