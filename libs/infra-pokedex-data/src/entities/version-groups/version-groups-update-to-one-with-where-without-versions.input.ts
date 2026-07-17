import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutVersionsInput } from './version-groups-update-without-versions.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutVersionsInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutVersionsInput)
    data!: VersionGroupsUpdateWithoutVersionsInput;
}
