import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsCreateWithoutVersionGroupsInput } from './regions-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutVersionGroupsInput } from './regions-create-or-connect-without-version-groups.input';
import { RegionsUpsertWithoutVersionGroupsInput } from './regions-upsert-without-version-groups.input';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { RegionsUpdateToOneWithWhereWithoutVersionGroupsInput } from './regions-update-to-one-with-where-without-version-groups.input';

@InputType()
export class RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput {

    @Field(() => RegionsCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutVersionGroupsInput)
    create?: RegionsCreateWithoutVersionGroupsInput;

    @Field(() => RegionsCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: RegionsCreateOrConnectWithoutVersionGroupsInput;

    @Field(() => RegionsUpsertWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsUpsertWithoutVersionGroupsInput)
    upsert?: RegionsUpsertWithoutVersionGroupsInput;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsUpdateToOneWithWhereWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsUpdateToOneWithWhereWithoutVersionGroupsInput)
    update?: RegionsUpdateToOneWithWhereWithoutVersionGroupsInput;
}
