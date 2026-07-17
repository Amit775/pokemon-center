import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyLocationAreasArgs {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: LocationAreasWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
