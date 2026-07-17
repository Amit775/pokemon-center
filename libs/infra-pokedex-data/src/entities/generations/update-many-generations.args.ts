import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateManyMutationInput } from './generations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GenerationsWhereInput } from './generations-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyGenerationsArgs {

    @Field(() => GenerationsUpdateManyMutationInput, {nullable:false})
    @Type(() => GenerationsUpdateManyMutationInput)
    data!: Identity<GenerationsUpdateManyMutationInput>;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
