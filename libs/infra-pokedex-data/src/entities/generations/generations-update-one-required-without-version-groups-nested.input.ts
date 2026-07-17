import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutVersionGroupsInput } from './generations-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutVersionGroupsInput } from './generations-create-or-connect-without-version-groups.input';
import { GenerationsUpsertWithoutVersionGroupsInput } from './generations-upsert-without-version-groups.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput } from './generations-update-to-one-with-where-without-version-groups.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutVersionGroupsNestedInput {

    @Field(() => GenerationsCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutVersionGroupsInput)
    create?: Identity<GenerationsCreateWithoutVersionGroupsInput>;

    @Field(() => GenerationsCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutVersionGroupsInput>;

    @Field(() => GenerationsUpsertWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutVersionGroupsInput)
    upsert?: Identity<GenerationsUpsertWithoutVersionGroupsInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput)
    update?: Identity<GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput>;
}
