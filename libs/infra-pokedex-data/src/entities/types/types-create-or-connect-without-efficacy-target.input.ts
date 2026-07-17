import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutEfficacyTargetInput } from './types-create-without-efficacy-target.input';

@InputType()
export class TypesCreateOrConnectWithoutEfficacyTargetInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutEfficacyTargetInput, {nullable:false})
    @Type(() => TypesCreateWithoutEfficacyTargetInput)
    create!: TypesCreateWithoutEfficacyTargetInput;
}
