import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeGameIndicesUpdateInput } from './type-game-indices-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';

@ArgsType()
export class UpdateOneTypeGameIndicesArgs {

    @Field(() => TypeGameIndicesUpdateInput, {nullable:false})
    @Type(() => TypeGameIndicesUpdateInput)
    data!: Identity<TypeGameIndicesUpdateInput>;

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;
}
