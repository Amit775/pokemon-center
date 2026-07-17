import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutPartyTypesInput } from './types-create-without-party-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutPartyTypesInput } from './types-create-or-connect-without-party-types.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutPartyTypesInput {

    @Field(() => TypesCreateWithoutPartyTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutPartyTypesInput)
    create?: Identity<TypesCreateWithoutPartyTypesInput>;

    @Field(() => TypesCreateOrConnectWithoutPartyTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutPartyTypesInput)
    connectOrCreate?: Identity<TypesCreateOrConnectWithoutPartyTypesInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
