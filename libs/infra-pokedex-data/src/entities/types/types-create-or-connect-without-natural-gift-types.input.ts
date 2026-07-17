import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutNaturalGiftTypesInput } from './types-create-without-natural-gift-types.input';

@InputType()
export class TypesCreateOrConnectWithoutNaturalGiftTypesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutNaturalGiftTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutNaturalGiftTypesInput)
    create!: Identity<TypesCreateWithoutNaturalGiftTypesInput>;
}
