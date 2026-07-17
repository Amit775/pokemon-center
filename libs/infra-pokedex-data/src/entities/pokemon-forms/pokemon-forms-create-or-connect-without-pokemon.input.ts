import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonFormsCreateWithoutPokemonInput } from './pokemon-forms-create-without-pokemon.input';

@InputType()
export class PokemonFormsCreateOrConnectWithoutPokemonInput {

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonFormsCreateWithoutPokemonInput)
    create!: Identity<PokemonFormsCreateWithoutPokemonInput>;
}
