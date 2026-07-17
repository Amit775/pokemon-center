import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateManyGenerationInput } from './version-groups-create-many-generation.input';
import { Type } from 'class-transformer';

@InputType()
export class VersionGroupsCreateManyGenerationInputEnvelope {

    @Field(() => [VersionGroupsCreateManyGenerationInput], {nullable:false})
    @Type(() => VersionGroupsCreateManyGenerationInput)
    data!: Array<VersionGroupsCreateManyGenerationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
