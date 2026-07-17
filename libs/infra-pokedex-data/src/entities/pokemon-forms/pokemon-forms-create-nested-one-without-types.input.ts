import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsCreateWithoutTypesInput } from './pokemon-forms-create-without-types.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateOrConnectWithoutTypesInput } from './pokemon-forms-create-or-connect-without-types.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';

@InputType()
export class PokemonFormsCreateNestedOneWithoutTypesInput {

    @Field(() => PokemonFormsCreateWithoutTypesInput, {nullable:true})
    @Type(() => PokemonFormsCreateWithoutTypesInput)
    create?: Identity<PokemonFormsCreateWithoutTypesInput>;

    @Field(() => PokemonFormsCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => PokemonFormsCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Identity<PokemonFormsCreateOrConnectWithoutTypesInput>;

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonFormsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;
}
