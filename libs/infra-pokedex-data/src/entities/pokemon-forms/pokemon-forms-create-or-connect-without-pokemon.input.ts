import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateWithoutPokemonInput } from './pokemon-forms-create-without-pokemon.input';

@InputType()
export class PokemonFormsCreateOrConnectWithoutPokemonInput {

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonFormsCreateWithoutPokemonInput)
    create!: PokemonFormsCreateWithoutPokemonInput;
}
