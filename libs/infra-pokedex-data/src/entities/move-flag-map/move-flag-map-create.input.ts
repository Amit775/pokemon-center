import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateNestedOneWithoutFlagMapInput } from '../moves/moves-create-nested-one-without-flag-map.input';
import { MoveFlagsCreateNestedOneWithoutFlagMapInput } from '../move-flags/move-flags-create-nested-one-without-flag-map.input';

@InputType()
export class MoveFlagMapCreateInput {

    @Field(() => MovesCreateNestedOneWithoutFlagMapInput, {nullable:false})
    move!: MovesCreateNestedOneWithoutFlagMapInput;

    @Field(() => MoveFlagsCreateNestedOneWithoutFlagMapInput, {nullable:false})
    flag!: MoveFlagsCreateNestedOneWithoutFlagMapInput;
}
