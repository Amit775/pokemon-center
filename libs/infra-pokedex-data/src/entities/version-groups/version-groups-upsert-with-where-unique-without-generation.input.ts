import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutGenerationInput } from './version-groups-update-without-generation.input';
import { VersionGroupsCreateWithoutGenerationInput } from './version-groups-create-without-generation.input';

@InputType()
export class VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutGenerationInput)
    update!: VersionGroupsUpdateWithoutGenerationInput;

    @Field(() => VersionGroupsCreateWithoutGenerationInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutGenerationInput)
    create!: VersionGroupsCreateWithoutGenerationInput;
}
