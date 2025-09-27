import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => BerryFlavorsListRelationFilter, {nullable:true})
    berryFlavors?: BerryFlavorsListRelationFilter;
}
