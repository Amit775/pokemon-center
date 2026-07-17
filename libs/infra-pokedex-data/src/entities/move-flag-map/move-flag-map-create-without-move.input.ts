import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagsCreateNestedOneWithoutFlagMapInput } from '../move-flags/move-flags-create-nested-one-without-flag-map.input';

@InputType()
export class MoveFlagMapCreateWithoutMoveInput {

    @Field(() => MoveFlagsCreateNestedOneWithoutFlagMapInput, {nullable:false})
    flag!: MoveFlagsCreateNestedOneWithoutFlagMapInput;
}
