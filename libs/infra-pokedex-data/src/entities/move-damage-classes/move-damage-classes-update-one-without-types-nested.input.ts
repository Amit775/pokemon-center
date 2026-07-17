import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveDamageClassesCreateWithoutTypesInput } from './move-damage-classes-create-without-types.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateOrConnectWithoutTypesInput } from './move-damage-classes-create-or-connect-without-types.input';
import { MoveDamageClassesUpsertWithoutTypesInput } from './move-damage-classes-upsert-without-types.input';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Prisma } from '@prisma/client';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput } from './move-damage-classes-update-to-one-with-where-without-types.input';

@InputType()
export class MoveDamageClassesUpdateOneWithoutTypesNestedInput {

    @Field(() => MoveDamageClassesCreateWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateWithoutTypesInput)
    create?: MoveDamageClassesCreateWithoutTypesInput;

    @Field(() => MoveDamageClassesCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: MoveDamageClassesCreateOrConnectWithoutTypesInput;

    @Field(() => MoveDamageClassesUpsertWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesUpsertWithoutTypesInput)
    upsert?: MoveDamageClassesUpsertWithoutTypesInput;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    disconnect?: MoveDamageClassesWhereInput;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    delete?: MoveDamageClassesWhereInput;

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;

    @Field(() => MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput)
    update?: MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput;
}
