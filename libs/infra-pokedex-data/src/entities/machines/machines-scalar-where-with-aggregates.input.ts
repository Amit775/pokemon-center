import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MachinesScalarWhereWithAggregatesInput {

    @Field(() => [MachinesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MachinesScalarWhereWithAggregatesInput>;

    @Field(() => [MachinesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MachinesScalarWhereWithAggregatesInput>;

    @Field(() => [MachinesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MachinesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    machine_number?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: IntWithAggregatesFilter;
}
