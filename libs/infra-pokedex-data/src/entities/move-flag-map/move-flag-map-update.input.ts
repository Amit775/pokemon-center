import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateOneRequiredWithoutFlagMapNestedInput } from '../moves/moves-update-one-required-without-flag-map-nested.input';
import { MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from '../move-flags/move-flags-update-one-required-without-flag-map-nested.input';

@InputType()
export class MoveFlagMapUpdateInput {

    @Field(() => MovesUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    move?: MovesUpdateOneRequiredWithoutFlagMapNestedInput;

    @Field(() => MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    flag?: MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput;
}
