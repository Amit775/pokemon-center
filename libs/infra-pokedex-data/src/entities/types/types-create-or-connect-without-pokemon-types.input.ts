import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutPokemonTypesInput } from './types-create-without-pokemon-types.input';

@InputType()
export class TypesCreateOrConnectWithoutPokemonTypesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutPokemonTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutPokemonTypesInput)
    create!: Identity<TypesCreateWithoutPokemonTypesInput>;
}
