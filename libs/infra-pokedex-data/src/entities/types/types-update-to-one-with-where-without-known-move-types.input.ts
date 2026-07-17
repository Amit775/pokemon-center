import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutKnownMoveTypesInput } from './types-update-without-known-move-types.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;

    @Field(() => TypesUpdateWithoutKnownMoveTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutKnownMoveTypesInput)
    data!: TypesUpdateWithoutKnownMoveTypesInput;
}
