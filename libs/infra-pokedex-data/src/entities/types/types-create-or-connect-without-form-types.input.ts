import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutFormTypesInput } from './types-create-without-form-types.input';

@InputType()
export class TypesCreateOrConnectWithoutFormTypesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutFormTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutFormTypesInput)
    create!: Identity<TypesCreateWithoutFormTypesInput>;
}
