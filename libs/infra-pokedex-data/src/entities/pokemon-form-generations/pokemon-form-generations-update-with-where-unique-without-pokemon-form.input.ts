import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsUpdateWithoutPokemonFormInput } from './pokemon-form-generations-update-without-pokemon-form.input';

@InputType()
export class PokemonFormGenerationsUpdateWithWhereUniqueWithoutPokemonFormInput {

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;

    @Field(() => PokemonFormGenerationsUpdateWithoutPokemonFormInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateWithoutPokemonFormInput)
    data!: Identity<PokemonFormGenerationsUpdateWithoutPokemonFormInput>;
}
