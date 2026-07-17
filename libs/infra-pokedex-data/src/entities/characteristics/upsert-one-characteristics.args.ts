import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';
import { Type } from 'class-transformer';
import { CharacteristicsCreateInput } from './characteristics-create.input';
import { CharacteristicsUpdateInput } from './characteristics-update.input';

@ArgsType()
export class UpsertOneCharacteristicsArgs {

    @Field(() => CharacteristicsWhereUniqueInput, {nullable:false})
    @Type(() => CharacteristicsWhereUniqueInput)
    where!: Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>;

    @Field(() => CharacteristicsCreateInput, {nullable:false})
    @Type(() => CharacteristicsCreateInput)
    create!: CharacteristicsCreateInput;

    @Field(() => CharacteristicsUpdateInput, {nullable:false})
    @Type(() => CharacteristicsUpdateInput)
    update!: CharacteristicsUpdateInput;
}
