import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutPartyTypesInput } from './types-create-without-party-types.input';

@InputType()
export class TypesCreateOrConnectWithoutPartyTypesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutPartyTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutPartyTypesInput)
    create!: Identity<TypesCreateWithoutPartyTypesInput>;
}
