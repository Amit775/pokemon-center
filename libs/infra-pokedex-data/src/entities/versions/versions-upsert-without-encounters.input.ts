import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsUpdateWithoutEncountersInput } from './versions-update-without-encounters.input';
import { Type } from 'class-transformer';
import { VersionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';
import { VersionsWhereInput } from './versions-where.input';

@InputType()
export class VersionsUpsertWithoutEncountersInput {

    @Field(() => VersionsUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutEncountersInput)
    update!: Identity<VersionsUpdateWithoutEncountersInput>;

    @Field(() => VersionsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => VersionsCreateWithoutEncountersInput)
    create!: Identity<VersionsCreateWithoutEncountersInput>;

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: Identity<VersionsWhereInput>;
}
