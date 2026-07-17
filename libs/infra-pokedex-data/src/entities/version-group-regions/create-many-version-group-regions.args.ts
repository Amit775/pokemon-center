import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupRegionsCreateManyInput } from './version-group-regions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVersionGroupRegionsArgs {

    @Field(() => [VersionGroupRegionsCreateManyInput], {nullable:false})
    @Type(() => VersionGroupRegionsCreateManyInput)
    data!: Array<VersionGroupRegionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
