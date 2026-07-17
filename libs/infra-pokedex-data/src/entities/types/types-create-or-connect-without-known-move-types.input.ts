import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutKnownMoveTypesInput } from './types-create-without-known-move-types.input';

@InputType()
export class TypesCreateOrConnectWithoutKnownMoveTypesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutKnownMoveTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutKnownMoveTypesInput)
    create!: Identity<TypesCreateWithoutKnownMoveTypesInput>;
}
