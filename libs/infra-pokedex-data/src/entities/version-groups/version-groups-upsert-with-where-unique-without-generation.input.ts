import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateWithoutGenerationInput } from './version-groups-update-without-generation.input';
import { VersionGroupsCreateWithoutGenerationInput } from './version-groups-create-without-generation.input';

@InputType()
export class VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutGenerationInput)
    update!: Identity<VersionGroupsUpdateWithoutGenerationInput>;

    @Field(() => VersionGroupsCreateWithoutGenerationInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutGenerationInput)
    create!: Identity<VersionGroupsCreateWithoutGenerationInput>;
}
