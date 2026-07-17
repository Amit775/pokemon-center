import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AbilitiesWhereInput } from './abilities-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAbilitiesArgs {

    @Field(() => AbilitiesWhereInput, {nullable:true})
    @Type(() => AbilitiesWhereInput)
    where?: AbilitiesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
