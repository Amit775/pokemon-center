import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutFormTypesInput } from './types-create-without-form-types.input';

@InputType()
export class TypesCreateOrConnectWithoutFormTypesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutFormTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutFormTypesInput)
    create!: TypesCreateWithoutFormTypesInput;
}
