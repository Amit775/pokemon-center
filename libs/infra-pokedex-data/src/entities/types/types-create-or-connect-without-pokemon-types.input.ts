import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutPokemonTypesInput } from './types-create-without-pokemon-types.input';

@InputType()
export class TypesCreateOrConnectWithoutPokemonTypesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutPokemonTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutPokemonTypesInput)
    create!: TypesCreateWithoutPokemonTypesInput;
}
