import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { VersionsUpdateWithoutEncountersInput } from './versions-update-without-encounters.input';

@InputType()
export class VersionsUpdateToOneWithWhereWithoutEncountersInput {

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: Identity<VersionsWhereInput>;

    @Field(() => VersionsUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutEncountersInput)
    data!: Identity<VersionsUpdateWithoutEncountersInput>;
}
