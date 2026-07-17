import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutVersionGroupsInput } from './regions-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutVersionGroupsInput } from './regions-create-or-connect-without-version-groups.input';
import { RegionsUpsertWithoutVersionGroupsInput } from './regions-upsert-without-version-groups.input';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { RegionsUpdateToOneWithWhereWithoutVersionGroupsInput } from './regions-update-to-one-with-where-without-version-groups.input';

@InputType()
export class RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput {

    @Field(() => RegionsCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutVersionGroupsInput)
    create?: Identity<RegionsCreateWithoutVersionGroupsInput>;

    @Field(() => RegionsCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: Identity<RegionsCreateOrConnectWithoutVersionGroupsInput>;

    @Field(() => RegionsUpsertWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsUpsertWithoutVersionGroupsInput)
    upsert?: Identity<RegionsUpsertWithoutVersionGroupsInput>;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsUpdateToOneWithWhereWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsUpdateToOneWithWhereWithoutVersionGroupsInput)
    update?: Identity<RegionsUpdateToOneWithWhereWithoutVersionGroupsInput>;
}
