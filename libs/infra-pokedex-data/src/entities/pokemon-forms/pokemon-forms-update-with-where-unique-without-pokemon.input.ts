import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormsUpdateWithoutPokemonInput } from './pokemon-forms-update-without-pokemon.input';

@InputType()
export class PokemonFormsUpdateWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonFormsUpdateWithoutPokemonInput)
    data!: PokemonFormsUpdateWithoutPokemonInput;
}
