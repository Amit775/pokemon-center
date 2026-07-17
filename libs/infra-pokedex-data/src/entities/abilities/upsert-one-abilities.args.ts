import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { AbilitiesCreateInput } from './abilities-create.input';
import { AbilitiesUpdateInput } from './abilities-update.input';

@ArgsType()
export class UpsertOneAbilitiesArgs {

    @Field(() => AbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => AbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;

    @Field(() => AbilitiesCreateInput, {nullable:false})
    @Type(() => AbilitiesCreateInput)
    create!: AbilitiesCreateInput;

    @Field(() => AbilitiesUpdateInput, {nullable:false})
    @Type(() => AbilitiesUpdateInput)
    update!: AbilitiesUpdateInput;
}
