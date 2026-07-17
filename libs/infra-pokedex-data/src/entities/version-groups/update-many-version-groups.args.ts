import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupsUpdateManyMutationInput } from './version-groups-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyVersionGroupsArgs {

    @Field(() => VersionGroupsUpdateManyMutationInput, {nullable:false})
    @Type(() => VersionGroupsUpdateManyMutationInput)
    data!: VersionGroupsUpdateManyMutationInput;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
