import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateOneRequiredWithoutFlagMapNestedInput } from '../moves/moves-update-one-required-without-flag-map-nested.input';
import { MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from '../move-flags/move-flags-update-one-required-without-flag-map-nested.input';

@InputType()
export class MoveFlagMapUpdateInput {

    @Field(() => MovesUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    move?: Identity<MovesUpdateOneRequiredWithoutFlagMapNestedInput>;

    @Field(() => MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    flag?: Identity<MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput>;
}
