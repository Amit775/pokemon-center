import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsCreateManyContestTypeInput } from './berry-flavors-create-many-contest-type.input';
import { Type } from 'class-transformer';

@InputType()
export class BerryFlavorsCreateManyContestTypeInputEnvelope {

    @Field(() => [BerryFlavorsCreateManyContestTypeInput], {nullable:false})
    @Type(() => BerryFlavorsCreateManyContestTypeInput)
    data!: Array<BerryFlavorsCreateManyContestTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
