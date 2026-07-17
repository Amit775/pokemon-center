import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsUpdateWithoutVersionGroupsInput } from './regions-update-without-version-groups.input';

@InputType()
export class RegionsUpdateToOneWithWhereWithoutVersionGroupsInput {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;

    @Field(() => RegionsUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutVersionGroupsInput)
    data!: RegionsUpdateWithoutVersionGroupsInput;
}
