import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyBerryFirmnessArgs {

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    @Type(() => BerryFirmnessWhereInput)
    where?: BerryFirmnessWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
