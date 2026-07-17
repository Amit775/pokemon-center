import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { VersionsUpdateWithoutEncountersInput } from './versions-update-without-encounters.input';

@InputType()
export class VersionsUpdateToOneWithWhereWithoutEncountersInput {

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: VersionsWhereInput;

    @Field(() => VersionsUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutEncountersInput)
    data!: VersionsUpdateWithoutEncountersInput;
}
