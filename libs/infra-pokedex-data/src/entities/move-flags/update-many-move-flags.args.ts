import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagsUpdateManyMutationInput } from './move-flags-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoveFlagsWhereInput } from './move-flags-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveFlagsArgs {

    @Field(() => MoveFlagsUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveFlagsUpdateManyMutationInput)
    data!: Identity<MoveFlagsUpdateManyMutationInput>;

    @Field(() => MoveFlagsWhereInput, {nullable:true})
    @Type(() => MoveFlagsWhereInput)
    where?: Identity<MoveFlagsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
