import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GrowthRatesCreateManyInput } from "../../../inputs/GrowthRatesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnGrowthRatesArgs {
  @TypeGraphQL.Field(_type => [GrowthRatesCreateManyInput], {
    nullable: false
  })
  data!: GrowthRatesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
