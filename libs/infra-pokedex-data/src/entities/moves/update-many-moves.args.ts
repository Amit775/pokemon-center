import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateManyMutationInput } from './moves-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MovesWhereInput } from './moves-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMovesArgs {

    @Field(() => MovesUpdateManyMutationInput, {nullable:false})
    @Type(() => MovesUpdateManyMutationInput)
    data!: Identity<MovesUpdateManyMutationInput>;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
