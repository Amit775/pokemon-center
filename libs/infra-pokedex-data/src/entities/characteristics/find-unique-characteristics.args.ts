import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCharacteristicsArgs {

    @Field(() => CharacteristicsWhereUniqueInput, {nullable:false})
    @Type(() => CharacteristicsWhereUniqueInput)
    where!: Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>;
}
