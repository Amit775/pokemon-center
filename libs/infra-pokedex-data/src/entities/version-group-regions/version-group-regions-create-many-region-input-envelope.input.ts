import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupRegionsCreateManyRegionInput } from './version-group-regions-create-many-region.input';
import { Type } from 'class-transformer';

@InputType()
export class VersionGroupRegionsCreateManyRegionInputEnvelope {

    @Field(() => [VersionGroupRegionsCreateManyRegionInput], {nullable:false})
    @Type(() => VersionGroupRegionsCreateManyRegionInput)
    data!: Array<VersionGroupRegionsCreateManyRegionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
