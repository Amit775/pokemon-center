import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacteristicsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    stat_id?: true;

    @Field(() => Boolean, {nullable:true})
    gene_mod_5?: true;
}
