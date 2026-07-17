import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutVersionGroupsInput } from './generations-create-without-version-groups.input';

@InputType()
export class GenerationsCreateOrConnectWithoutVersionGroupsInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutVersionGroupsInput)
    create!: GenerationsCreateWithoutVersionGroupsInput;
}
