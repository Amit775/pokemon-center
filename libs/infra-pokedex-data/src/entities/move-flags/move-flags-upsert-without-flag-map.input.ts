import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagsUpdateWithoutFlagMapInput } from './move-flags-update-without-flag-map.input';
import { Type } from 'class-transformer';
import { MoveFlagsCreateWithoutFlagMapInput } from './move-flags-create-without-flag-map.input';
import { MoveFlagsWhereInput } from './move-flags-where.input';

@InputType()
export class MoveFlagsUpsertWithoutFlagMapInput {

    @Field(() => MoveFlagsUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => MoveFlagsUpdateWithoutFlagMapInput)
    update!: Identity<MoveFlagsUpdateWithoutFlagMapInput>;

    @Field(() => MoveFlagsCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => MoveFlagsCreateWithoutFlagMapInput)
    create!: Identity<MoveFlagsCreateWithoutFlagMapInput>;

    @Field(() => MoveFlagsWhereInput, {nullable:true})
    @Type(() => MoveFlagsWhereInput)
    where?: Identity<MoveFlagsWhereInput>;
}
