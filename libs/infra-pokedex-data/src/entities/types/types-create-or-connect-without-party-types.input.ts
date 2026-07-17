import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutPartyTypesInput } from './types-create-without-party-types.input';

@InputType()
export class TypesCreateOrConnectWithoutPartyTypesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutPartyTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutPartyTypesInput)
    create!: TypesCreateWithoutPartyTypesInput;
}
