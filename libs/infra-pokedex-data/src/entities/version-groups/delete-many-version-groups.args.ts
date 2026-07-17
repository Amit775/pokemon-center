import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyVersionGroupsArgs {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
