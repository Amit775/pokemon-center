import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosCreateManyInput } from "../../../inputs/ContestCombosCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnContestCombosArgs {
  @TypeGraphQL.Field(_type => [ContestCombosCreateManyInput], {
    nullable: false
  })
  data!: ContestCombosCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
