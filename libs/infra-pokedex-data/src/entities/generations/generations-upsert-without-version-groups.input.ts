import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateWithoutVersionGroupsInput } from './generations-update-without-version-groups.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutVersionGroupsInput } from './generations-create-without-version-groups.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutVersionGroupsInput {

    @Field(() => GenerationsUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutVersionGroupsInput)
    update!: Identity<GenerationsUpdateWithoutVersionGroupsInput>;

    @Field(() => GenerationsCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutVersionGroupsInput)
    create!: Identity<GenerationsCreateWithoutVersionGroupsInput>;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;
}
