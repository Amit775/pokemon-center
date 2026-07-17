import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutVersionGroupsInput } from './generations-update-without-version-groups.input';

@InputType()
export class GenerationsUpdateToOneWithWhereWithoutVersionGroupsInput {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;

    @Field(() => GenerationsUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutVersionGroupsInput)
    data!: Identity<GenerationsUpdateWithoutVersionGroupsInput>;
}
