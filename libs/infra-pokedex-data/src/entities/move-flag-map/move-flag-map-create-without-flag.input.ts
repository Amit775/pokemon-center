import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateNestedOneWithoutFlagMapInput } from '../moves/moves-create-nested-one-without-flag-map.input';

@InputType()
export class MoveFlagMapCreateWithoutFlagInput {

    @Field(() => MovesCreateNestedOneWithoutFlagMapInput, {nullable:false})
    move!: MovesCreateNestedOneWithoutFlagMapInput;
}
