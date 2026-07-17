import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsCreateWithoutGenerationsInput } from './pokemon-forms-create-without-generations.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateOrConnectWithoutGenerationsInput } from './pokemon-forms-create-or-connect-without-generations.input';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';

@InputType()
export class PokemonFormsCreateNestedOneWithoutGenerationsInput {

    @Field(() => PokemonFormsCreateWithoutGenerationsInput, {nullable:true})
    @Type(() => PokemonFormsCreateWithoutGenerationsInput)
    create?: PokemonFormsCreateWithoutGenerationsInput;

    @Field(() => PokemonFormsCreateOrConnectWithoutGenerationsInput, {nullable:true})
    @Type(() => PokemonFormsCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: PokemonFormsCreateOrConnectWithoutGenerationsInput;

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;
}
