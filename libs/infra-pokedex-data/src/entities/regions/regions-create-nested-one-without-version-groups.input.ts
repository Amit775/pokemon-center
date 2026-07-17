import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutVersionGroupsInput } from './regions-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutVersionGroupsInput } from './regions-create-or-connect-without-version-groups.input';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class RegionsCreateNestedOneWithoutVersionGroupsInput {

    @Field(() => RegionsCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutVersionGroupsInput)
    create?: Identity<RegionsCreateWithoutVersionGroupsInput>;

    @Field(() => RegionsCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: Identity<RegionsCreateOrConnectWithoutVersionGroupsInput>;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;
}
