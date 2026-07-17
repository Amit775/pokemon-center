import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesUncheckedUpdateManyWithoutFirmnessNestedInput } from '../berries/berries-unchecked-update-many-without-firmness-nested.input';

@InputType()
export class BerryFirmnessUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => BerriesUncheckedUpdateManyWithoutFirmnessNestedInput, {nullable:true})
    berries?: Identity<BerriesUncheckedUpdateManyWithoutFirmnessNestedInput>;
}
