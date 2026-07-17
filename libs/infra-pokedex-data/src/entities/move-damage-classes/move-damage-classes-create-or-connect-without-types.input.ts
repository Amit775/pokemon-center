import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveDamageClassesCreateWithoutTypesInput } from './move-damage-classes-create-without-types.input';

@InputType()
export class MoveDamageClassesCreateOrConnectWithoutTypesInput {

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:false})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;

    @Field(() => MoveDamageClassesCreateWithoutTypesInput, {nullable:false})
    @Type(() => MoveDamageClassesCreateWithoutTypesInput)
    create!: Identity<MoveDamageClassesCreateWithoutTypesInput>;
}
