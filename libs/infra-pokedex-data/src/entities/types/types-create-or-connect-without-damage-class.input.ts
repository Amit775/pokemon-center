import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutDamageClassInput } from './types-create-without-damage-class.input';

@InputType()
export class TypesCreateOrConnectWithoutDamageClassInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutDamageClassInput, {nullable:false})
    @Type(() => TypesCreateWithoutDamageClassInput)
    create!: Identity<TypesCreateWithoutDamageClassInput>;
}
