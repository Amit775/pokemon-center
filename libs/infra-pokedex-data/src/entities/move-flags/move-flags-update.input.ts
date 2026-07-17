import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagMapUpdateManyWithoutFlagNestedInput } from '../move-flag-map/move-flag-map-update-many-without-flag-nested.input';

@InputType()
export class MoveFlagsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MoveFlagMapUpdateManyWithoutFlagNestedInput, {nullable:true})
    flagMap?: Identity<MoveFlagMapUpdateManyWithoutFlagNestedInput>;
}
