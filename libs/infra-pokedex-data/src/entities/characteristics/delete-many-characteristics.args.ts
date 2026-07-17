import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacteristicsWhereInput } from './characteristics-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCharacteristicsArgs {

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    @Type(() => CharacteristicsWhereInput)
    where?: CharacteristicsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
