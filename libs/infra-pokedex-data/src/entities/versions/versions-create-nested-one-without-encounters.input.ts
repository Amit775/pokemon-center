import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutEncountersInput } from './versions-create-or-connect-without-encounters.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class VersionsCreateNestedOneWithoutEncountersInput {

    @Field(() => VersionsCreateWithoutEncountersInput, {nullable:true})
    @Type(() => VersionsCreateWithoutEncountersInput)
    create?: Identity<VersionsCreateWithoutEncountersInput>;

    @Field(() => VersionsCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: Identity<VersionsCreateOrConnectWithoutEncountersInput>;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;
}
