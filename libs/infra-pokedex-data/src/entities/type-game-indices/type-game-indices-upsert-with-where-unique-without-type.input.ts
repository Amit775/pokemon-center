import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesUpdateWithoutTypeInput } from './type-game-indices-update-without-type.input';
import { TypeGameIndicesCreateWithoutTypeInput } from './type-game-indices-create-without-type.input';

@InputType()
export class TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput {

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;

    @Field(() => TypeGameIndicesUpdateWithoutTypeInput, {nullable:false})
    @Type(() => TypeGameIndicesUpdateWithoutTypeInput)
    update!: TypeGameIndicesUpdateWithoutTypeInput;

    @Field(() => TypeGameIndicesCreateWithoutTypeInput, {nullable:false})
    @Type(() => TypeGameIndicesCreateWithoutTypeInput)
    create!: TypeGameIndicesCreateWithoutTypeInput;
}
