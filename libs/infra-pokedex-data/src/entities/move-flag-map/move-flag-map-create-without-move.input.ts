import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagsCreateNestedOneWithoutFlagMapInput } from '../move-flags/move-flags-create-nested-one-without-flag-map.input';

@InputType()
export class MoveFlagMapCreateWithoutMoveInput {

    @Field(() => MoveFlagsCreateNestedOneWithoutFlagMapInput, {nullable:false})
    flag!: Identity<MoveFlagsCreateNestedOneWithoutFlagMapInput>;
}
