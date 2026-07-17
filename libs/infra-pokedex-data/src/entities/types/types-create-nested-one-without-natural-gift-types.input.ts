import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutNaturalGiftTypesInput } from './types-create-without-natural-gift-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutNaturalGiftTypesInput } from './types-create-or-connect-without-natural-gift-types.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutNaturalGiftTypesInput {

    @Field(() => TypesCreateWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutNaturalGiftTypesInput)
    create?: Identity<TypesCreateWithoutNaturalGiftTypesInput>;

    @Field(() => TypesCreateOrConnectWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutNaturalGiftTypesInput)
    connectOrCreate?: Identity<TypesCreateOrConnectWithoutNaturalGiftTypesInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
