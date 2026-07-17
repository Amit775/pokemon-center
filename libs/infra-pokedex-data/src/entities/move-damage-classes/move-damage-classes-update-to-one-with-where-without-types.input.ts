import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesUpdateWithoutTypesInput } from './move-damage-classes-update-without-types.input';

@InputType()
export class MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: MoveDamageClassesWhereInput;

    @Field(() => MoveDamageClassesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateWithoutTypesInput)
    data!: MoveDamageClassesUpdateWithoutTypesInput;
}
