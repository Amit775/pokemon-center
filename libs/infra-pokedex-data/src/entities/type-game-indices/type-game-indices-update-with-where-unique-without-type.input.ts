import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypeGameIndicesUpdateWithoutTypeInput } from './type-game-indices-update-without-type.input';

@InputType()
export class TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput {

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;

    @Field(() => TypeGameIndicesUpdateWithoutTypeInput, {nullable:false})
    @Type(() => TypeGameIndicesUpdateWithoutTypeInput)
    data!: Identity<TypeGameIndicesUpdateWithoutTypeInput>;
}
