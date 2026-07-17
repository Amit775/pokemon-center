import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoveDamageClassesArgs {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: MoveDamageClassesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
