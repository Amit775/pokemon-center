import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from '../move-flags/move-flags-update-one-required-without-flag-map-nested.input';

@InputType()
export class MoveFlagMapUpdateWithoutMoveInput {

    @Field(() => MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    flag?: MoveFlagsUpdateOneRequiredWithoutFlagMapNestedInput;
}
