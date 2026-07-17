import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutNaturalGiftTypesInput } from './types-create-without-natural-gift-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutNaturalGiftTypesInput } from './types-create-or-connect-without-natural-gift-types.input';
import { TypesUpsertWithoutNaturalGiftTypesInput } from './types-upsert-without-natural-gift-types.input';
import { TypesWhereInput } from './types-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput } from './types-update-to-one-with-where-without-natural-gift-types.input';

@InputType()
export class TypesUpdateOneWithoutNaturalGiftTypesNestedInput {

    @Field(() => TypesCreateWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutNaturalGiftTypesInput)
    create?: Identity<TypesCreateWithoutNaturalGiftTypesInput>;

    @Field(() => TypesCreateOrConnectWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutNaturalGiftTypesInput)
    connectOrCreate?: Identity<TypesCreateOrConnectWithoutNaturalGiftTypesInput>;

    @Field(() => TypesUpsertWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesUpsertWithoutNaturalGiftTypesInput)
    upsert?: Identity<TypesUpsertWithoutNaturalGiftTypesInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    disconnect?: Identity<TypesWhereInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    delete?: Identity<TypesWhereInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput)
    update?: Identity<TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput>;
}
