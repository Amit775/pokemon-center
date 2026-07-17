import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MoveMetaStatChangesUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    change?: number;
}
