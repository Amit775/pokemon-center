import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';

@InputType()
export class VersionsCreateOrConnectWithoutEncountersInput {

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => VersionsCreateWithoutEncountersInput)
    create!: Identity<VersionsCreateWithoutEncountersInput>;
}
