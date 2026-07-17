import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagMapUncheckedCreateNestedManyWithoutFlagInput } from '../move-flag-map/move-flag-map-unchecked-create-nested-many-without-flag.input';

@InputType()
export class MoveFlagsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MoveFlagMapUncheckedCreateNestedManyWithoutFlagInput, {nullable:true})
    flagMap?: Identity<MoveFlagMapUncheckedCreateNestedManyWithoutFlagInput>;
}
