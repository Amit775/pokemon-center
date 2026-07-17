import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { VersionsCreateWithoutVersionGroupInput } from './versions-create-without-version-group.input';

@InputType()
export class VersionsCreateOrConnectWithoutVersionGroupInput {

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionsCreateWithoutVersionGroupInput)
    create!: VersionsCreateWithoutVersionGroupInput;
}
