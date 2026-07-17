import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEncountersArgs {

    @Field(() => EncountersWhereInput, {nullable:true})
    @Type(() => EncountersWhereInput)
    where?: EncountersWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
