import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutKnownMoveTypesInput } from './types-create-without-known-move-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutKnownMoveTypesInput } from './types-create-or-connect-without-known-move-types.input';
import { TypesUpsertWithoutKnownMoveTypesInput } from './types-upsert-without-known-move-types.input';
import { TypesWhereInput } from './types-where.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput } from './types-update-to-one-with-where-without-known-move-types.input';

@InputType()
export class TypesUpdateOneWithoutKnownMoveTypesNestedInput {

    @Field(() => TypesCreateWithoutKnownMoveTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutKnownMoveTypesInput)
    create?: TypesCreateWithoutKnownMoveTypesInput;

    @Field(() => TypesCreateOrConnectWithoutKnownMoveTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutKnownMoveTypesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutKnownMoveTypesInput;

    @Field(() => TypesUpsertWithoutKnownMoveTypesInput, {nullable:true})
    @Type(() => TypesUpsertWithoutKnownMoveTypesInput)
    upsert?: TypesUpsertWithoutKnownMoveTypesInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    disconnect?: TypesWhereInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    delete?: TypesWhereInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput)
    update?: TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput;
}
