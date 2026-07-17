import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutNaturalGiftTypesInput } from './types-update-without-natural-gift-types.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutNaturalGiftTypesInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;

    @Field(() => TypesUpdateWithoutNaturalGiftTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutNaturalGiftTypesInput)
    data!: Identity<TypesUpdateWithoutNaturalGiftTypesInput>;
}
