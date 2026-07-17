import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutNaturalGiftTypesInput } from './types-create-without-natural-gift-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutNaturalGiftTypesInput } from './types-create-or-connect-without-natural-gift-types.input';
import { TypesUpsertWithoutNaturalGiftTypesInput } from './types-upsert-without-natural-gift-types.input';
import { TypesWhereInput } from './types-where.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput } from './types-update-to-one-with-where-without-natural-gift-types.input';

@InputType()
export class TypesUpdateOneWithoutNaturalGiftTypesNestedInput {

    @Field(() => TypesCreateWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutNaturalGiftTypesInput)
    create?: TypesCreateWithoutNaturalGiftTypesInput;

    @Field(() => TypesCreateOrConnectWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutNaturalGiftTypesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutNaturalGiftTypesInput;

    @Field(() => TypesUpsertWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesUpsertWithoutNaturalGiftTypesInput)
    upsert?: TypesUpsertWithoutNaturalGiftTypesInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    disconnect?: TypesWhereInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    delete?: TypesWhereInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput)
    update?: TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput;
}
