import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacteristicsUpdateInput } from './characteristics-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';

@ArgsType()
export class UpdateOneCharacteristicsArgs {

    @Field(() => CharacteristicsUpdateInput, {nullable:false})
    @Type(() => CharacteristicsUpdateInput)
    data!: CharacteristicsUpdateInput;

    @Field(() => CharacteristicsWhereUniqueInput, {nullable:false})
    @Type(() => CharacteristicsWhereUniqueInput)
    where!: Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>;
}
