import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveDamageClassesCreateWithoutTypesInput } from './move-damage-classes-create-without-types.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateOrConnectWithoutTypesInput } from './move-damage-classes-create-or-connect-without-types.input';
import { MoveDamageClassesUpsertWithoutTypesInput } from './move-damage-classes-upsert-without-types.input';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput } from './move-damage-classes-update-to-one-with-where-without-types.input';

@InputType()
export class MoveDamageClassesUpdateOneWithoutTypesNestedInput {

    @Field(() => MoveDamageClassesCreateWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateWithoutTypesInput)
    create?: Identity<MoveDamageClassesCreateWithoutTypesInput>;

    @Field(() => MoveDamageClassesCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Identity<MoveDamageClassesCreateOrConnectWithoutTypesInput>;

    @Field(() => MoveDamageClassesUpsertWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesUpsertWithoutTypesInput)
    upsert?: Identity<MoveDamageClassesUpsertWithoutTypesInput>;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    disconnect?: Identity<MoveDamageClassesWhereInput>;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    delete?: Identity<MoveDamageClassesWhereInput>;

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;

    @Field(() => MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput)
    update?: Identity<MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput>;
}
