import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestComboCreateManyInput } from "../../../inputs/ContestComboCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnContestComboArgs {
  @TypeGraphQL.Field(_type => [ContestComboCreateManyInput], {
    nullable: false
  })
  data!: ContestComboCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
