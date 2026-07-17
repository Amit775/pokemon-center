import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutPartyTypesInput } from './types-create-without-party-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutPartyTypesInput } from './types-create-or-connect-without-party-types.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutPartyTypesInput {

    @Field(() => TypesCreateWithoutPartyTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutPartyTypesInput)
    create?: TypesCreateWithoutPartyTypesInput;

    @Field(() => TypesCreateOrConnectWithoutPartyTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutPartyTypesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutPartyTypesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
