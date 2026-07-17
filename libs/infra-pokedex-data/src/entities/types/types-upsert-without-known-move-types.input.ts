import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesUpdateWithoutKnownMoveTypesInput } from './types-update-without-known-move-types.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutKnownMoveTypesInput } from './types-create-without-known-move-types.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutKnownMoveTypesInput {

    @Field(() => TypesUpdateWithoutKnownMoveTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutKnownMoveTypesInput)
    update!: TypesUpdateWithoutKnownMoveTypesInput;

    @Field(() => TypesCreateWithoutKnownMoveTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutKnownMoveTypesInput)
    create!: TypesCreateWithoutKnownMoveTypesInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;
}
