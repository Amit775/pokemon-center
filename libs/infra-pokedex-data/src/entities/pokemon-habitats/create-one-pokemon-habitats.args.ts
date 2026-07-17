import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsCreateInput } from './pokemon-habitats-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonHabitatsArgs {

    @Field(() => PokemonHabitatsCreateInput, {nullable:false})
    @Type(() => PokemonHabitatsCreateInput)
    data!: Identity<PokemonHabitatsCreateInput>;
}
