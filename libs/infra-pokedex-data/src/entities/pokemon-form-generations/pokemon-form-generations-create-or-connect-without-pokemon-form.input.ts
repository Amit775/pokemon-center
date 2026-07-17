import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsCreateWithoutPokemonFormInput } from './pokemon-form-generations-create-without-pokemon-form.input';

@InputType()
export class PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput {

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;

    @Field(() => PokemonFormGenerationsCreateWithoutPokemonFormInput, {nullable:false})
    @Type(() => PokemonFormGenerationsCreateWithoutPokemonFormInput)
    create!: Identity<PokemonFormGenerationsCreateWithoutPokemonFormInput>;
}
