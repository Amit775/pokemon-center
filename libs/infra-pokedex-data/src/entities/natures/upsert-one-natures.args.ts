import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { NaturesCreateInput } from './natures-create.input';
import { NaturesUpdateInput } from './natures-update.input';

@ArgsType()
export class UpsertOneNaturesArgs {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesCreateInput, {nullable:false})
    @Type(() => NaturesCreateInput)
    create!: Identity<NaturesCreateInput>;

    @Field(() => NaturesUpdateInput, {nullable:false})
    @Type(() => NaturesUpdateInput)
    update!: Identity<NaturesUpdateInput>;
}
