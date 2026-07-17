import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutNaturalGiftTypesInput } from './types-update-without-natural-gift-types.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutNaturalGiftTypesInput } from './types-create-without-natural-gift-types.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutNaturalGiftTypesInput {

    @Field(() => TypesUpdateWithoutNaturalGiftTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutNaturalGiftTypesInput)
    update!: Identity<TypesUpdateWithoutNaturalGiftTypesInput>;

    @Field(() => TypesCreateWithoutNaturalGiftTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutNaturalGiftTypesInput)
    create!: Identity<TypesCreateWithoutNaturalGiftTypesInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;
}
