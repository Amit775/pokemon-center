import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupRegionsScalarWhereInput } from './version-group-regions-scalar-where.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsUncheckedUpdateManyWithoutRegionInput } from './version-group-regions-unchecked-update-many-without-region.input';

@InputType()
export class VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput {

    @Field(() => VersionGroupRegionsScalarWhereInput, {nullable:false})
    @Type(() => VersionGroupRegionsScalarWhereInput)
    where!: Identity<VersionGroupRegionsScalarWhereInput>;

    @Field(() => VersionGroupRegionsUncheckedUpdateManyWithoutRegionInput, {nullable:false})
    @Type(() => VersionGroupRegionsUncheckedUpdateManyWithoutRegionInput)
    data!: Identity<VersionGroupRegionsUncheckedUpdateManyWithoutRegionInput>;
}
