import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateManyVersionGroupInput } from './versions-create-many-version-group.input';
import { Type } from 'class-transformer';

@InputType()
export class VersionsCreateManyVersionGroupInputEnvelope {

    @Field(() => [VersionsCreateManyVersionGroupInput], {nullable:false})
    @Type(() => VersionsCreateManyVersionGroupInput)
    data!: Array<VersionsCreateManyVersionGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
