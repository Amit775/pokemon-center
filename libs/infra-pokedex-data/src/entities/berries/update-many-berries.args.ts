import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesUpdateManyMutationInput } from './berries-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BerriesWhereInput } from './berries-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBerriesArgs {

    @Field(() => BerriesUpdateManyMutationInput, {nullable:false})
    @Type(() => BerriesUpdateManyMutationInput)
    data!: Identity<BerriesUpdateManyMutationInput>;

    @Field(() => BerriesWhereInput, {nullable:true})
    @Type(() => BerriesWhereInput)
    where?: Identity<BerriesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
