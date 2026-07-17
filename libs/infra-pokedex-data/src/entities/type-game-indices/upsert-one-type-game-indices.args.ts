import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypeGameIndicesCreateInput } from './type-game-indices-create.input';
import { TypeGameIndicesUpdateInput } from './type-game-indices-update.input';

@ArgsType()
export class UpsertOneTypeGameIndicesArgs {

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;

    @Field(() => TypeGameIndicesCreateInput, {nullable:false})
    @Type(() => TypeGameIndicesCreateInput)
    create!: Identity<TypeGameIndicesCreateInput>;

    @Field(() => TypeGameIndicesUpdateInput, {nullable:false})
    @Type(() => TypeGameIndicesUpdateInput)
    update!: Identity<TypeGameIndicesUpdateInput>;
}
