import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutFormTypesInput } from './types-create-without-form-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutFormTypesInput } from './types-create-or-connect-without-form-types.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutFormTypesInput {

    @Field(() => TypesCreateWithoutFormTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutFormTypesInput)
    create?: TypesCreateWithoutFormTypesInput;

    @Field(() => TypesCreateOrConnectWithoutFormTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutFormTypesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutFormTypesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
