import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsUpdateManyMutationInput } from './pokemon-habitats-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonHabitatsArgs {

    @Field(() => PokemonHabitatsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonHabitatsUpdateManyMutationInput)
    data!: Identity<PokemonHabitatsUpdateManyMutationInput>;

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    where?: Identity<PokemonHabitatsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
