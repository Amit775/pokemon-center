import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsUpdateWithoutSpeciesInput } from './pokemon-habitats-update-without-species.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsCreateWithoutSpeciesInput } from './pokemon-habitats-create-without-species.input';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';

@InputType()
export class PokemonHabitatsUpsertWithoutSpeciesInput {

    @Field(() => PokemonHabitatsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonHabitatsUpdateWithoutSpeciesInput)
    update!: Identity<PokemonHabitatsUpdateWithoutSpeciesInput>;

    @Field(() => PokemonHabitatsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonHabitatsCreateWithoutSpeciesInput)
    create!: Identity<PokemonHabitatsCreateWithoutSpeciesInput>;

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    where?: Identity<PokemonHabitatsWhereInput>;
}
