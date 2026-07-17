import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MoveMetaStatChangesUncheckedUpdateWithoutMetaInput {

    @Field(() => Int, {nullable:true})
    stat_id?: number;

    @Field(() => Int, {nullable:true})
    change?: number;
}
