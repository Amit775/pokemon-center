import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutEfficacyInput } from './types-create-without-efficacy.input';

@InputType()
export class TypesCreateOrConnectWithoutEfficacyInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutEfficacyInput, {nullable:false})
    @Type(() => TypesCreateWithoutEfficacyInput)
    create!: TypesCreateWithoutEfficacyInput;
}
