import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupRegionsCreateManyVersionGroupInput } from './version-group-regions-create-many-version-group.input';
import { Type } from 'class-transformer';

@InputType()
export class VersionGroupRegionsCreateManyVersionGroupInputEnvelope {

    @Field(() => [VersionGroupRegionsCreateManyVersionGroupInput], {nullable:false})
    @Type(() => VersionGroupRegionsCreateManyVersionGroupInput)
    data!: Array<VersionGroupRegionsCreateManyVersionGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
