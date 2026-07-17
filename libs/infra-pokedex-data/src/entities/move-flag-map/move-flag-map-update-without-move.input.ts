import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from '../move-flags/move-flags-update-one-required-without-flag-map-nested.input';

@InputType()
export class MoveFlagMapUpdateWithoutMoveInput {

    @Field(() => MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    flag?: Identity<MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput>;
}
