import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupRegionsCreateInput } from './version-group-regions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVersionGroupRegionsArgs {

    @Field(() => VersionGroupRegionsCreateInput, {nullable:false})
    @Type(() => VersionGroupRegionsCreateInput)
    data!: VersionGroupRegionsCreateInput;
}
