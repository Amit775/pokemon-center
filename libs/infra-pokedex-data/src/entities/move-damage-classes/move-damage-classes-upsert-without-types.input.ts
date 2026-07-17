import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveDamageClassesUpdateWithoutTypesInput } from './move-damage-classes-update-without-types.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateWithoutTypesInput } from './move-damage-classes-create-without-types.input';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';

@InputType()
export class MoveDamageClassesUpsertWithoutTypesInput {

    @Field(() => MoveDamageClassesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateWithoutTypesInput)
    update!: MoveDamageClassesUpdateWithoutTypesInput;

    @Field(() => MoveDamageClassesCreateWithoutTypesInput, {nullable:false})
    @Type(() => MoveDamageClassesCreateWithoutTypesInput)
    create!: MoveDamageClassesCreateWithoutTypesInput;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: MoveDamageClassesWhereInput;
}
