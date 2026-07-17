import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutVersionGroupsInput } from './generations-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutVersionGroupsInput } from './generations-create-or-connect-without-version-groups.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class GenerationsCreateNestedOneWithoutVersionGroupsInput {

    @Field(() => GenerationsCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutVersionGroupsInput)
    create?: GenerationsCreateWithoutVersionGroupsInput;

    @Field(() => GenerationsCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutVersionGroupsInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;
}
