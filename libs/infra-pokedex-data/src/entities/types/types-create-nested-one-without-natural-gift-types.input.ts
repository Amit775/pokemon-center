import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutNaturalGiftTypesInput } from './types-create-without-natural-gift-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutNaturalGiftTypesInput } from './types-create-or-connect-without-natural-gift-types.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutNaturalGiftTypesInput {

    @Field(() => TypesCreateWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutNaturalGiftTypesInput)
    create?: TypesCreateWithoutNaturalGiftTypesInput;

    @Field(() => TypesCreateOrConnectWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutNaturalGiftTypesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutNaturalGiftTypesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
