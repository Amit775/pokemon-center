import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BerryFlavorsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    berry_id?: number;

    @Field(() => Int, {nullable:true})
    contest_type_id?: number;

    @Field(() => Int, {nullable:true})
    flavor?: number;
}
