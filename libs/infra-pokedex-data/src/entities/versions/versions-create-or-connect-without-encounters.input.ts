import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { VersionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';

@InputType()
export class VersionsCreateOrConnectWithoutEncountersInput {

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => VersionsCreateWithoutEncountersInput)
    create!: VersionsCreateWithoutEncountersInput;
}
