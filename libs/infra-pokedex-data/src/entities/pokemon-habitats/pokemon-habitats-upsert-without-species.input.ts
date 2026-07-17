import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonHabitatsUpdateWithoutSpeciesInput } from './pokemon-habitats-update-without-species.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsCreateWithoutSpeciesInput } from './pokemon-habitats-create-without-species.input';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';

@InputType()
export class PokemonHabitatsUpsertWithoutSpeciesInput {

    @Field(() => PokemonHabitatsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonHabitatsUpdateWithoutSpeciesInput)
    update!: PokemonHabitatsUpdateWithoutSpeciesInput;

    @Field(() => PokemonHabitatsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonHabitatsCreateWithoutSpeciesInput)
    create!: PokemonHabitatsCreateWithoutSpeciesInput;

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    where?: PokemonHabitatsWhereInput;
}
