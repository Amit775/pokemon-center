import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { CharacteristicsCreateInput } from './characteristics-create.input';
import { CharacteristicsUpdateInput } from './characteristics-update.input';

@ArgsType()
export class UpsertOneCharacteristicsArgs {

    @Field(() => CharacteristicsWhereUniqueInput, {nullable:false})
    @Type(() => CharacteristicsWhereUniqueInput)
    where!: Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>;

    @Field(() => CharacteristicsCreateInput, {nullable:false})
    @Type(() => CharacteristicsCreateInput)
    create!: Identity<CharacteristicsCreateInput>;

    @Field(() => CharacteristicsUpdateInput, {nullable:false})
    @Type(() => CharacteristicsUpdateInput)
    update!: Identity<CharacteristicsUpdateInput>;
}
