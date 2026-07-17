import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutKnownMoveTypesInput } from './types-create-without-known-move-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutKnownMoveTypesInput } from './types-create-or-connect-without-known-move-types.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutKnownMoveTypesInput {

    @Field(() => TypesCreateWithoutKnownMoveTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutKnownMoveTypesInput)
    create?: TypesCreateWithoutKnownMoveTypesInput;

    @Field(() => TypesCreateOrConnectWithoutKnownMoveTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutKnownMoveTypesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutKnownMoveTypesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
