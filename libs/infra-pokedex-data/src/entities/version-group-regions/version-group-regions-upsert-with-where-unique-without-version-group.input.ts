import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsUpdateWithoutVersionGroupInput } from './version-group-regions-update-without-version-group.input';
import { VersionGroupRegionsCreateWithoutVersionGroupInput } from './version-group-regions-create-without-version-group.input';

@InputType()
export class VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => VersionGroupRegionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupRegionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>;

    @Field(() => VersionGroupRegionsUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionGroupRegionsUpdateWithoutVersionGroupInput)
    update!: VersionGroupRegionsUpdateWithoutVersionGroupInput;

    @Field(() => VersionGroupRegionsCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionGroupRegionsCreateWithoutVersionGroupInput)
    create!: VersionGroupRegionsCreateWithoutVersionGroupInput;
}
