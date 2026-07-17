import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateOneRequiredWithoutFlagMapNestedInput } from '../moves/moves-update-one-required-without-flag-map-nested.input';

@InputType()
export class MoveFlagMapUpdateWithoutFlagInput {

    @Field(() => MovesUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    move?: MovesUpdateOneRequiredWithoutFlagMapNestedInput;
}
