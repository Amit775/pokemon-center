import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupsCreateManyInput } from './version-groups-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVersionGroupsArgs {

    @Field(() => [VersionGroupsCreateManyInput], {nullable:false})
    @Type(() => VersionGroupsCreateManyInput)
    data!: Array<VersionGroupsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
