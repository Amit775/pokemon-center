import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsUpdateWithoutPokemonFormInput } from './pokemon-form-generations-update-without-pokemon-form.input';
import { PokemonFormGenerationsCreateWithoutPokemonFormInput } from './pokemon-form-generations-create-without-pokemon-form.input';

@InputType()
export class PokemonFormGenerationsUpsertWithWhereUniqueWithoutPokemonFormInput {

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;

    @Field(() => PokemonFormGenerationsUpdateWithoutPokemonFormInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateWithoutPokemonFormInput)
    update!: PokemonFormGenerationsUpdateWithoutPokemonFormInput;

    @Field(() => PokemonFormGenerationsCreateWithoutPokemonFormInput, {nullable:false})
    @Type(() => PokemonFormGenerationsCreateWithoutPokemonFormInput)
    create!: PokemonFormGenerationsCreateWithoutPokemonFormInput;
}
