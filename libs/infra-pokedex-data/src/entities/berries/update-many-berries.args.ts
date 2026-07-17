import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerriesUpdateManyMutationInput } from './berries-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BerriesWhereInput } from './berries-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBerriesArgs {

    @Field(() => BerriesUpdateManyMutationInput, {nullable:false})
    @Type(() => BerriesUpdateManyMutationInput)
    data!: BerriesUpdateManyMutationInput;

    @Field(() => BerriesWhereInput, {nullable:true})
    @Type(() => BerriesWhereInput)
    where?: BerriesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
