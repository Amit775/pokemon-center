import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyGenerationsArgs {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
