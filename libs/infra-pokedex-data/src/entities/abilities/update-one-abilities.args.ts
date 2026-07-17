import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesUpdateInput } from './abilities-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';

@ArgsType()
export class UpdateOneAbilitiesArgs {

    @Field(() => AbilitiesUpdateInput, {nullable:false})
    @Type(() => AbilitiesUpdateInput)
    data!: Identity<AbilitiesUpdateInput>;

    @Field(() => AbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => AbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;
}
