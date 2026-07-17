import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsUpdateWithoutVersionGroupsInput } from './regions-update-without-version-groups.input';
import { Type } from 'class-transformer';
import { RegionsCreateWithoutVersionGroupsInput } from './regions-create-without-version-groups.input';
import { RegionsWhereInput } from './regions-where.input';

@InputType()
export class RegionsUpsertWithoutVersionGroupsInput {

    @Field(() => RegionsUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutVersionGroupsInput)
    update!: RegionsUpdateWithoutVersionGroupsInput;

    @Field(() => RegionsCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => RegionsCreateWithoutVersionGroupsInput)
    create!: RegionsCreateWithoutVersionGroupsInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;
}
