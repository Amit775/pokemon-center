import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFlavorsWhereInput } from './berry-flavors-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyBerryFlavorsArgs {

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    @Type(() => BerryFlavorsWhereInput)
    where?: BerryFlavorsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
