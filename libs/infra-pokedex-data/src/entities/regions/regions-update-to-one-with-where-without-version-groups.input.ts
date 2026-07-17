import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsUpdateWithoutVersionGroupsInput } from './regions-update-without-version-groups.input';

@InputType()
export class RegionsUpdateToOneWithWhereWithoutVersionGroupsInput {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: Identity<RegionsWhereInput>;

    @Field(() => RegionsUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutVersionGroupsInput)
    data!: Identity<RegionsUpdateWithoutVersionGroupsInput>;
}
