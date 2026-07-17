import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutKnownMoveTypesInput } from './types-update-without-known-move-types.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutKnownMoveTypesInput } from './types-create-without-known-move-types.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutKnownMoveTypesInput {

    @Field(() => TypesUpdateWithoutKnownMoveTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutKnownMoveTypesInput)
    update!: Identity<TypesUpdateWithoutKnownMoveTypesInput>;

    @Field(() => TypesCreateWithoutKnownMoveTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutKnownMoveTypesInput)
    create!: Identity<TypesCreateWithoutKnownMoveTypesInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;
}
