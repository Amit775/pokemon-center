import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveFlagMapCreateNestedManyWithoutFlagInput } from '../move-flag-map/move-flag-map-create-nested-many-without-flag.input';

@InputType()
export class MoveFlagsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MoveFlagMapCreateNestedManyWithoutFlagInput, {nullable:true})
    flagMap?: MoveFlagMapCreateNestedManyWithoutFlagInput;
}
