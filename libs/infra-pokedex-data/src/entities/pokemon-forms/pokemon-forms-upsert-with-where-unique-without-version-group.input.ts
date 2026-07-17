import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonFormsUpdateWithoutVersionGroupInput } from './pokemon-forms-update-without-version-group.input';
import { PokemonFormsCreateWithoutVersionGroupInput } from './pokemon-forms-create-without-version-group.input';

@InputType()
export class PokemonFormsUpsertWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokemonFormsUpdateWithoutVersionGroupInput)
    update!: Identity<PokemonFormsUpdateWithoutVersionGroupInput>;

    @Field(() => PokemonFormsCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokemonFormsCreateWithoutVersionGroupInput)
    create!: Identity<PokemonFormsCreateWithoutVersionGroupInput>;
}
