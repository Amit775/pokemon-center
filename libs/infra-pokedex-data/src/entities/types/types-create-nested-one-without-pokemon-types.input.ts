import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutPokemonTypesInput } from './types-create-without-pokemon-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutPokemonTypesInput } from './types-create-or-connect-without-pokemon-types.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutPokemonTypesInput {

    @Field(() => TypesCreateWithoutPokemonTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutPokemonTypesInput)
    create?: TypesCreateWithoutPokemonTypesInput;

    @Field(() => TypesCreateOrConnectWithoutPokemonTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutPokemonTypesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutPokemonTypesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
