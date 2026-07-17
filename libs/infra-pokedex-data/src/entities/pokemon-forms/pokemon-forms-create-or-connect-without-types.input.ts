import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateWithoutTypesInput } from './pokemon-forms-create-without-types.input';

@InputType()
export class PokemonFormsCreateOrConnectWithoutTypesInput {

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsCreateWithoutTypesInput, {nullable:false})
    @Type(() => PokemonFormsCreateWithoutTypesInput)
    create!: PokemonFormsCreateWithoutTypesInput;
}
