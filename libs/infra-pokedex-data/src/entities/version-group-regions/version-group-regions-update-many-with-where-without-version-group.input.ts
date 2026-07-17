import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupRegionsScalarWhereInput } from './version-group-regions-scalar-where.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupInput } from './version-group-regions-unchecked-update-many-without-version-group.input';

@InputType()
export class VersionGroupRegionsUpdateManyWithWhereWithoutVersionGroupInput {

    @Field(() => VersionGroupRegionsScalarWhereInput, {nullable:false})
    @Type(() => VersionGroupRegionsScalarWhereInput)
    where!: Identity<VersionGroupRegionsScalarWhereInput>;

    @Field(() => VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupInput)
    data!: Identity<VersionGroupRegionsUncheckedUpdateManyWithoutVersionGroupInput>;
}
