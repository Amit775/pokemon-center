import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutEfficacyInput } from './types-create-without-efficacy.input';

@InputType()
export class TypesCreateOrConnectWithoutEfficacyInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutEfficacyInput, {nullable:false})
    @Type(() => TypesCreateWithoutEfficacyInput)
    create!: Identity<TypesCreateWithoutEfficacyInput>;
}
