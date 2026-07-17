import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormsUpdateWithoutVersionGroupInput } from './pokemon-forms-update-without-version-group.input';

@InputType()
export class PokemonFormsUpdateWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokemonFormsUpdateWithoutVersionGroupInput)
    data!: PokemonFormsUpdateWithoutVersionGroupInput;
}
