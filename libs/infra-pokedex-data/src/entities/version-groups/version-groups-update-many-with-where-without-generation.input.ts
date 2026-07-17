import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsScalarWhereInput } from './version-groups-scalar-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateManyMutationInput } from './version-groups-update-many-mutation.input';

@InputType()
export class VersionGroupsUpdateManyWithWhereWithoutGenerationInput {

    @Field(() => VersionGroupsScalarWhereInput, {nullable:false})
    @Type(() => VersionGroupsScalarWhereInput)
    where!: Identity<VersionGroupsScalarWhereInput>;

    @Field(() => VersionGroupsUpdateManyMutationInput, {nullable:false})
    @Type(() => VersionGroupsUpdateManyMutationInput)
    data!: Identity<VersionGroupsUpdateManyMutationInput>;
}
