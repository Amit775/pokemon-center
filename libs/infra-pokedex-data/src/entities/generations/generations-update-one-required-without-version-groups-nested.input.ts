import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutVersionGroupsInput } from './generations-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutVersionGroupsInput } from './generations-create-or-connect-without-version-groups.input';
import { GenerationsUpsertWithoutVersionGroupsInput } from './generations-upsert-without-version-groups.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput } from './generations-update-to-one-with-where-without-version-groups.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput {

    @Field(() => GenerationsCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutVersionGroupsInput)
    create?: GenerationsCreateWithoutVersionGroupsInput;

    @Field(() => GenerationsCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutVersionGroupsInput;

    @Field(() => GenerationsUpsertWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutVersionGroupsInput)
    upsert?: GenerationsUpsertWithoutVersionGroupsInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput)
    update?: GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput;
}
