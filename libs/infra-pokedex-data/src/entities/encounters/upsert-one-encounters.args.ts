import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { EncountersCreateInput } from './encounters-create.input';
import { EncountersUpdateInput } from './encounters-update.input';

@ArgsType()
export class UpsertOneEncountersArgs {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersCreateInput, {nullable:false})
    @Type(() => EncountersCreateInput)
    create!: EncountersCreateInput;

    @Field(() => EncountersUpdateInput, {nullable:false})
    @Type(() => EncountersUpdateInput)
    update!: EncountersUpdateInput;
}
