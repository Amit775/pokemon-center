import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutGenerationInput } from './version-groups-create-without-generation.input';

@InputType()
export class VersionGroupsCreateOrConnectWithoutGenerationInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateWithoutGenerationInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutGenerationInput)
    create!: VersionGroupsCreateWithoutGenerationInput;
}
