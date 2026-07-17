import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutPartyTypesInput } from './types-create-without-party-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutPartyTypesInput } from './types-create-or-connect-without-party-types.input';
import { TypesUpsertWithoutPartyTypesInput } from './types-upsert-without-party-types.input';
import { TypesWhereInput } from './types-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutPartyTypesInput } from './types-update-to-one-with-where-without-party-types.input';

@InputType()
export class TypesUpdateOneWithoutPartyTypesNestedInput {

    @Field(() => TypesCreateWithoutPartyTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutPartyTypesInput)
    create?: Identity<TypesCreateWithoutPartyTypesInput>;

    @Field(() => TypesCreateOrConnectWithoutPartyTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutPartyTypesInput)
    connectOrCreate?: Identity<TypesCreateOrConnectWithoutPartyTypesInput>;

    @Field(() => TypesUpsertWithoutPartyTypesInput, {nullable:true})
    @Type(() => TypesUpsertWithoutPartyTypesInput)
    upsert?: Identity<TypesUpsertWithoutPartyTypesInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    disconnect?: Identity<TypesWhereInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    delete?: Identity<TypesWhereInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutPartyTypesInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutPartyTypesInput)
    update?: Identity<TypesUpdateToOneWithWhereWithoutPartyTypesInput>;
}
