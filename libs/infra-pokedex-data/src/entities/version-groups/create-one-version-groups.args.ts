import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateInput } from './version-groups-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVersionGroupsArgs {

    @Field(() => VersionGroupsCreateInput, {nullable:false})
    @Type(() => VersionGroupsCreateInput)
    data!: Identity<VersionGroupsCreateInput>;
}
