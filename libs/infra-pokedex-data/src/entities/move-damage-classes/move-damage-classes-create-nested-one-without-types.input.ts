import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveDamageClassesCreateWithoutTypesInput } from './move-damage-classes-create-without-types.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateOrConnectWithoutTypesInput } from './move-damage-classes-create-or-connect-without-types.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';

@InputType()
export class MoveDamageClassesCreateNestedOneWithoutTypesInput {

    @Field(() => MoveDamageClassesCreateWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateWithoutTypesInput)
    create?: Identity<MoveDamageClassesCreateWithoutTypesInput>;

    @Field(() => MoveDamageClassesCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => MoveDamageClassesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Identity<MoveDamageClassesCreateOrConnectWithoutTypesInput>;

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;
}
