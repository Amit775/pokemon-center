import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveDamageClassesCreateInput } from './move-damage-classes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveDamageClassesArgs {

    @Field(() => MoveDamageClassesCreateInput, {nullable:false})
    @Type(() => MoveDamageClassesCreateInput)
    data!: MoveDamageClassesCreateInput;
}
