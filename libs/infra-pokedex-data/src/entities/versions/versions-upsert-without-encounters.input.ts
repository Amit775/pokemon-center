import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsUpdateWithoutEncountersInput } from './versions-update-without-encounters.input';
import { Type } from 'class-transformer';
import { VersionsCreateWithoutEncountersInput } from './versions-create-without-encounters.input';
import { VersionsWhereInput } from './versions-where.input';

@InputType()
export class VersionsUpsertWithoutEncountersInput {

    @Field(() => VersionsUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutEncountersInput)
    update!: VersionsUpdateWithoutEncountersInput;

    @Field(() => VersionsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => VersionsCreateWithoutEncountersInput)
    create!: VersionsCreateWithoutEncountersInput;

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: VersionsWhereInput;
}
