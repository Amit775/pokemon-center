import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypeCreateManyInput } from "../../../inputs/ContestTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnContestTypeArgs {
  @TypeGraphQL.Field(_type => [ContestTypeCreateManyInput], {
    nullable: false
  })
  data!: ContestTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
