import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsUpdateWithoutVersionGroupsInput } from './regions-update-without-version-groups.input';
import { Type } from 'class-transformer';
import { RegionsCreateWithoutVersionGroupsInput } from './regions-create-without-version-groups.input';
import { RegionsWhereInput } from './regions-where.input';

@InputType()
export class RegionsUpsertWithoutVersionGroupsInput {

    @Field(() => RegionsUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutVersionGroupsInput)
    update!: Identity<RegionsUpdateWithoutVersionGroupsInput>;

    @Field(() => RegionsCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => RegionsCreateWithoutVersionGroupsInput)
    create!: Identity<RegionsCreateWithoutVersionGroupsInput>;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: Identity<RegionsWhereInput>;
}
