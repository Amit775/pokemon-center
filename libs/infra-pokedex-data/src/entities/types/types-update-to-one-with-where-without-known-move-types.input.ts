import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutKnownMoveTypesInput } from './types-update-without-known-move-types.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;

    @Field(() => TypesUpdateWithoutKnownMoveTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutKnownMoveTypesInput)
    data!: Identity<TypesUpdateWithoutKnownMoveTypesInput>;
}
