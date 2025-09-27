import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesWhereInput } from './nature-battle-style-preferences-where.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesOrderByWithRelationInput } from './nature-battle-style-preferences-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NatureBattleStylePreferencesScalarFieldEnum } from './nature-battle-style-preferences-scalar-field.enum';

@ArgsType()
export class FindFirstNatureBattleStylePreferencesArgs {

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereInput)
    where?: NatureBattleStylePreferencesWhereInput;

    @Field(() => [NatureBattleStylePreferencesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NatureBattleStylePreferencesOrderByWithRelationInput>;

    @Field(() => NatureBattleStylePreferencesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NatureBattleStylePreferencesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${NatureBattleStylePreferencesScalarFieldEnum}`>;
}
