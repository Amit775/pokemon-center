import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesUpdateWithoutTypeInput } from './type-game-indices-update-without-type.input';

@InputType()
export class TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput {

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;

    @Field(() => TypeGameIndicesUpdateWithoutTypeInput, {nullable:false})
    @Type(() => TypeGameIndicesUpdateWithoutTypeInput)
    data!: TypeGameIndicesUpdateWithoutTypeInput;
}
