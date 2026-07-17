import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';
import { BerryFlavorsListRelationFilter } from '../berry-flavors/berry-flavors-list-relation-filter.input';

@InputType()
export class ContestTypesWhereInput {

    @Field(() => [ContestTypesWhereInput], {nullable:true})
    AND?: Array<ContestTypesWhereInput>;

    @Field(() => [ContestTypesWhereInput], {nullable:true})
    OR?: Array<ContestTypesWhereInput>;

    @Field(() => [ContestTypesWhereInput], {nullable:true})
    NOT?: Array<ContestTypesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: Identity<MovesListRelationFilter>;

    @Field(() => BerryFlavorsListRelationFilter, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsListRelationFilter>;
}
