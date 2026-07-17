import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesUpdateManyWithoutFirmnessNestedInput } from '../berries/berries-update-many-without-firmness-nested.input';

@InputType()
export class BerryFirmnessUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => BerriesUpdateManyWithoutFirmnessNestedInput, {nullable:true})
    berries?: Identity<BerriesUpdateManyWithoutFirmnessNestedInput>;
}
