import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutDamageClassInput } from './types-update-without-damage-class.input';
import { TypesCreateWithoutDamageClassInput } from './types-create-without-damage-class.input';

@InputType()
export class TypesUpsertWithWhereUniqueWithoutDamageClassInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateWithoutDamageClassInput, {nullable:false})
    @Type(() => TypesUpdateWithoutDamageClassInput)
    update!: Identity<TypesUpdateWithoutDamageClassInput>;

    @Field(() => TypesCreateWithoutDamageClassInput, {nullable:false})
    @Type(() => TypesCreateWithoutDamageClassInput)
    create!: Identity<TypesCreateWithoutDamageClassInput>;
}
