import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsCreateWithoutPokemonFormInput } from './pokemon-form-generations-create-without-pokemon-form.input';

@InputType()
export class PokemonFormGenerationsCreateOrConnectWithoutPokemonFormInput {

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormGenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;

    @Field(() => PokemonFormGenerationsCreateWithoutPokemonFormInput, {nullable:false})
    @Type(() => PokemonFormGenerationsCreateWithoutPokemonFormInput)
    create!: PokemonFormGenerationsCreateWithoutPokemonFormInput;
}
