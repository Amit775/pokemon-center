import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CharacteristicsUpdateInput } from './characteristics-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';

@ArgsType()
export class UpdateOneCharacteristicsArgs {

    @Field(() => CharacteristicsUpdateInput, {nullable:false})
    @Type(() => CharacteristicsUpdateInput)
    data!: Identity<CharacteristicsUpdateInput>;

    @Field(() => CharacteristicsWhereUniqueInput, {nullable:false})
    @Type(() => CharacteristicsWhereUniqueInput)
    where!: Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>;
}
