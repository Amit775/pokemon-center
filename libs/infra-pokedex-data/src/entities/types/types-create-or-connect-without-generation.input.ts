import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutGenerationInput } from './types-create-without-generation.input';

@InputType()
export class TypesCreateOrConnectWithoutGenerationInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => TypesCreateWithoutGenerationInput)
    create!: TypesCreateWithoutGenerationInput;
}
