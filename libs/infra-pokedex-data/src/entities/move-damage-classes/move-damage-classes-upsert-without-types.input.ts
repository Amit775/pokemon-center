import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveDamageClassesUpdateWithoutTypesInput } from './move-damage-classes-update-without-types.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateWithoutTypesInput } from './move-damage-classes-create-without-types.input';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';

@InputType()
export class MoveDamageClassesUpsertWithoutTypesInput {

    @Field(() => MoveDamageClassesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateWithoutTypesInput)
    update!: Identity<MoveDamageClassesUpdateWithoutTypesInput>;

    @Field(() => MoveDamageClassesCreateWithoutTypesInput, {nullable:false})
    @Type(() => MoveDamageClassesCreateWithoutTypesInput)
    create!: Identity<MoveDamageClassesCreateWithoutTypesInput>;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: Identity<MoveDamageClassesWhereInput>;
}
