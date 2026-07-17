import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionsUpdateWithoutVersionGroupInput } from './versions-update-without-version-group.input';

@InputType()
export class VersionsUpdateWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutVersionGroupInput)
    data!: Identity<VersionsUpdateWithoutVersionGroupInput>;
}
