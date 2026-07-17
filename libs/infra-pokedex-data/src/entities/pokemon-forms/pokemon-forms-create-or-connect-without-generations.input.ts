import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateWithoutGenerationsInput } from './pokemon-forms-create-without-generations.input';

@InputType()
export class PokemonFormsCreateOrConnectWithoutGenerationsInput {

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => PokemonFormsCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => PokemonFormsCreateWithoutGenerationsInput)
    create!: PokemonFormsCreateWithoutGenerationsInput;
}
