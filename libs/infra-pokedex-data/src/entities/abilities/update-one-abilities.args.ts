import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AbilitiesUpdateInput } from './abilities-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';

@ArgsType()
export class UpdateOneAbilitiesArgs {

    @Field(() => AbilitiesUpdateInput, {nullable:false})
    @Type(() => AbilitiesUpdateInput)
    data!: AbilitiesUpdateInput;

    @Field(() => AbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => AbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;
}
