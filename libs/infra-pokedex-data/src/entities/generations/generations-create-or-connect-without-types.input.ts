import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutTypesInput } from './generations-create-without-types.input';

@InputType()
export class GenerationsCreateOrConnectWithoutTypesInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutTypesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutTypesInput)
    create!: Identity<GenerationsCreateWithoutTypesInput>;
}
