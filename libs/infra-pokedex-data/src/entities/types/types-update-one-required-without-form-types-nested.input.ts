import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutFormTypesInput } from './types-create-without-form-types.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutFormTypesInput } from './types-create-or-connect-without-form-types.input';
import { TypesUpsertWithoutFormTypesInput } from './types-upsert-without-form-types.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutFormTypesInput } from './types-update-to-one-with-where-without-form-types.input';

@InputType()
export class TypesUpdateOneRequiredWithoutFormTypesNestedInput {

    @Field(() => TypesCreateWithoutFormTypesInput, {nullable:true})
    @Type(() => TypesCreateWithoutFormTypesInput)
    create?: TypesCreateWithoutFormTypesInput;

    @Field(() => TypesCreateOrConnectWithoutFormTypesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutFormTypesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutFormTypesInput;

    @Field(() => TypesUpsertWithoutFormTypesInput, {nullable:true})
    @Type(() => TypesUpsertWithoutFormTypesInput)
    upsert?: TypesUpsertWithoutFormTypesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutFormTypesInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutFormTypesInput)
    update?: TypesUpdateToOneWithWhereWithoutFormTypesInput;
}
