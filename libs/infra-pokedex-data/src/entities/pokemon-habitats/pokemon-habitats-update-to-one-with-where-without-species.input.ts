import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsUpdateWithoutSpeciesInput } from './pokemon-habitats-update-without-species.input';

@InputType()
export class PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput {

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    where?: Identity<PokemonHabitatsWhereInput>;

    @Field(() => PokemonHabitatsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonHabitatsUpdateWithoutSpeciesInput)
    data!: Identity<PokemonHabitatsUpdateWithoutSpeciesInput>;
}
